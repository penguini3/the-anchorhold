#!/bin/bash

npm run build
git add .
git commit -m "local edit"
git push
git push deployment
echo "Published!"
