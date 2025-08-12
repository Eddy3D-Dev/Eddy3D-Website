#!/bin/bash

# Move to the folder this script is in
cd "$(dirname "$0")"

# First, build the image
docker build -t custom-mkdocs-material . --no-cache

# Then run it
docker run --rm -it \
  -p 8080:8000 \
  -v $(pwd):/docs \
  custom-mkdocs-material