echo $1
nvm use 14
echo " "

echo "account-docs"
cd ../account-docs
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "account-docs COMPLETE"
echo "----------------------------------"
echo " "

echo "api-documentation"
cd ../api-documentation
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "api-documentation COMPLETE"
echo "----------------------------------"
echo " "

echo "atlas-docs"
cd ../atlas-docs
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "atlas-docs COMPLETE"
echo "----------------------------------"
echo " "

echo "data-docs"
cd ../data-docs
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "data-docs COMPLETE"
echo "----------------------------------"
echo " "

echo "docs-starter-kit"
cd ../docs-starter-kit
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "docs-starter-kit COMPLETE"
echo "----------------------------------"
echo " "

echo "documentation"
cd ../documentation
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "documentation COMPLETE"
echo "----------------------------------"
echo " "

echo "gl-js-seats"
cd ../gl-js-seats
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "gl-js-seats COMPLETE"
echo "----------------------------------"
echo " "

echo "help"
cd ../help
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "help COMPLETE"
echo "----------------------------------"
echo " "

echo "mapbox-gl-js-docs"
cd ../mapbox-gl-js-docs
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "mapbox-gl-js-docs COMPLETE"
echo "----------------------------------"
echo " "

echo "mts-docs"
cd ../mts-docs
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "mts-docs COMPLETE"
echo "----------------------------------"
echo " "

echo "playground"
cd ../playground
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "playground COMPLETE"
echo "----------------------------------"
echo " "

echo "subdomain-docs-root"
cd ../subdomain-docs-root
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "subdomain-docs-root COMPLETE"
echo "----------------------------------"
echo " "

echo "unity-sdk"
cd ../unity-sdk
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "unity-sdk COMPLETE"
echo "----------------------------------"
echo " "

nvm use 16

echo "android-docs"
cd ../android-docs
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "android-docs COMPLETE"
echo "----------------------------------"
echo " "

echo "ios-sdk"
cd ../ios-sdk
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "ios-sdk COMPLETE"
echo "----------------------------------"
echo " "

echo "studio-manual"
cd ../studio-manual
git checkout publisher-production
git branch -D update-dr-ui-$1
git pull origin publisher-production
git checkout -b update-dr-ui-$1
npm install @mapbox/dr-ui@$1
git add package.json package-lock.json
git commit -m "upgrade dr-ui to $1"
git push --set-upstream --force origin update-dr-ui-$1
echo "----------------------------------"
echo "PULL REQUEST LINK BELOW"
gh pr create --fill
echo "studio-manual COMPLETE"
echo "----------------------------------"
echo " "

echo "dr-ui updates pushed, but not merged. Export this console output and Ctrl+F 'Creating pull request for' to open PRs."