echo $2
cd ../$2
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1 
gh pr create --fill