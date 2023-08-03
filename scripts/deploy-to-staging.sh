#!/bin/bash
npm run build &&
cd pkg &&
git init &&
git add . &&
git commit -m "first commit" &&
git checkout -b redesign-pkg &&
git remote add origin git@github.com:mapbox/dr-ui.git &&
git push origin redesign-pkg --force
