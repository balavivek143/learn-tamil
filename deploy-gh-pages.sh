#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# === CONFIGURATION ===
REPO_URL="https://github.com/balavivek143/learn-tamil.git"
BRANCH="gh-pages"

# === BUILD PROJECT ===
rm -rf build
echo "🛠 Building React app..."
npm run deploy

# === DEPLOY BUILD FOLDER ===
echo "🚀 Deploying to GitHub Pages..."

cd build
git init
git config user.email "balavivek143@gmail.com"
git config user.name "Bala
git add .
git commit -m "Deploying to $BRANCH"
git remote add origin $REPO_URL
git push origin HEAD:$BRANCH --force
cd ..
rm -rf build/.git
rm -rf build

echo "✅ Successfully deployed to: https://${REPO_URL#https://github.com/}/tree/$BRANCH"
echo "🌍 View live at: https://${REPO_URL#https://github.com/}/".replace('.git','')
