#!/bin/bash

mkdir -p $HOME/.local/bin
npm config set prefix $HOME/.local
npm install -g

tail -f /dev/null
