import os
import subprocess
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

BETAFPV_REPO_DIR = "/betaflight_repo"  # inside container
BETAFPV_CONFIG_DIR = "/betaflight_config"
BOARDS_DIR = os.path.join(BETAFPV_CONFIG_DIR, "configs")

app = FastAPI()
origins = [
    "http://localhost:5173",  
    "http://localhost",       
    "*",          
]           

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def clone_repo():
    """Clone Betaflight repo if not already present, with submodules."""
    if not os.path.exists(BETAFPV_REPO_DIR):
        try:
            subprocess.run(
                ["git", "clone", "--recurse-submodules", "https://github.com/betaflight/betaflight.git", BETAFPV_REPO_DIR],
                check=True
            )
        except subprocess.CalledProcessError as e:
            raise HTTPException(status_code=500, detail=f"Failed to clone repo: {e}")
    else:
        # Ensure repo is up-to-date and submodules are updated
        try:
            subprocess.run(["git", "fetch", "--all"], cwd=BETAFPV_REPO_DIR, check=True)
            subprocess.run(["git", "pull"], cwd=BETAFPV_REPO_DIR, check=True)
            subprocess.run(["git", "submodule", "update", "--init", "--recursive"], cwd=BETAFPV_REPO_DIR, check=True)
        except subprocess.CalledProcessError as e:
            raise HTTPException(status_code=500, detail=f"Failed to update repo: {e}")


@app.on_event("startup")
def startup_event():
    """Ensure repo exists on startup."""
    clone_repo()

@app.get("/boards")
def get_boards():
    if not os.path.exists(BOARDS_DIR):
        raise HTTPException(status_code=500, detail="Boards directory not found in repo")

    boards = [entry for entry in os.listdir(BOARDS_DIR)
              if os.path.isdir(os.path.join(BOARDS_DIR, entry))]

    if not boards:
        raise HTTPException(status_code=500, detail="No boards found in configs folder")

    return sorted(boards)

@app.get("/versions/{board_name}")
def get_versions(board_name: str):
    """List all available git tags (versions)."""
    if not os.path.exists(BETAFPV_REPO_DIR):
        raise HTTPException(status_code=500, detail="Repo not found")

    try:
        subprocess.run(
            ["git", "fetch", "--tags"],
            cwd=BETAFPV_REPO_DIR,
            check=True
        )
        result = subprocess.run(
            ["git", "tag", "--sort=-creatordate"],
            cwd=BETAFPV_REPO_DIR,
            capture_output=True,
            text=True,
            check=True
        )
        tags = result.stdout.splitlines()
        return tags
    except subprocess.CalledProcessError as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch tags: {e}")
