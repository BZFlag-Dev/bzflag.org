#!/bin/bash

set -eu

# Install stakx into a folder listed in $PATH
STAKX_BIN_DIR="$HOME/.local/bin"
STAKX_VERSION="0.2.1"

mkdir -p $STAKX_BIN_DIR
curl -L "https://github.com/stakx-io/stakx/releases/download/v$STAKX_VERSION/stakx-$STAKX_VERSION.phar" -o "$STAKX_BIN_DIR/stakx"
chmod +x "$STAKX_BIN_DIR/stakx"

# Update package listings
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo gpg --dearmour -o /usr/share/keyrings/yarn-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/yarn-keyring.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update

# Install entr to watch for file changes while development. stakx's serve feature
# has known issues, especially with reloading YAML files. We'll temporarily use
# `entr` to watch for file changes and restart the web server.
sudo apt install -y entr

# Add some useful aliases
echo "alias serve='find . -type f \( -name \"*.yaml\" -o -name \"*.yml\" -o -name \"*.json\" -o -name \"*.scss\" \) | entr -nr stakx serve --conf _config-dev.yml'" >> ~/.bashrc

# We host some additional assets, such as videos, outside the Git repository
php fetch-assets.php

# Copy example config files
cp _data/privacy.yaml.example _data/privacy.yaml
cp _data/matomo.yaml.example _data/matomo.yaml
