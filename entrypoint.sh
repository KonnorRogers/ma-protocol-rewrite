#!/bin/bash
set -e

# Regen new node_modules
rm -rf node_modules

# Clean the cache
gatsby clean

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
