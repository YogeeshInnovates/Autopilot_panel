#!/bin/sh
set -e

BETAFPV_REPO_DIR="/betaflight_repo"

# If repo doesn't exist, clone it
if [ ! -d "$BETAFPV_REPO_DIR/.git" ]; then
    echo "Cloning Betaflight firmware..."
    git clone --depth 1 https://github.com/betaflight/betaflight.git "$BETAFPV_REPO_DIR" || {
        echo "Git clone failed, retrying..."
        sleep 5
        git clone --depth 1 https://github.com/betaflight/betaflight.git "$BETAFPV_REPO_DIR"
    }
else
    echo "Updating Betaflight firmware..."
    cd "$BETAFPV_REPO_DIR"
    git pull --ff-only || echo "Could not update repo, using existing version."
fi

exec "$@"
