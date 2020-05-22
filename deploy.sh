#!bin/bash

cd backend
rm -rf ./build
cd ../frontend
rm -rf ./build
npm run build
cp -r ./build ../backend/
cd ..
git add *
git commit -m 'new automated build'
git push -u
git subtree push --prefix=backend heroku master