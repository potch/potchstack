# let's get this party started

projname="$(basename $(pwd))"

echo "using project name $projname"

jq ".name |= \"$projname\"" package.json.example > package.json

echo "installing dependencies..."

npm i