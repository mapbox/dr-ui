#!/bin/bash
# useage: sh scripts/update-dr-ui-all.sh X.X.X
jq -c -r '.[]' ./scripts/target-repositories.json | while read i; do
    echo Running pull request script for $i
    sh ./scripts/create-pull-request.sh $1 $i
done