#!/bin/bash

test -d node_modules || npm install
npm test
