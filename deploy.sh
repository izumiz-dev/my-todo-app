#!/bin/zsh

rm -rf node_modules build && yarn && yarn build && yarn run deploy
