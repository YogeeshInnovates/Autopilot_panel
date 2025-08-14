FROM python:3.9-slim

WORKDIR /app

# Install git and ARM build tools
RUN apt-get update && apt-get install -y \
    git \
    make \
    gcc-arm-none-eabi \
    binutils-arm-none-eabi \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/betaflight/betaflight.git /betaflight_repo

RUN git clone --recurse-submodules https://github.com/betaflight/config.git /betaflight_config

# Copy Python dependencies
COPY requirements.txt . 
RUN pip install --no-cache-dir -r requirements.txt

# Copy FastAPI backend code
COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
