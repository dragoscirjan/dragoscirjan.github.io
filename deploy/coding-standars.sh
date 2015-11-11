#! /bin/bash
set -e

export CHROME_WRAPPER="`readlink -f "$0"`"
HERE="`dirname "$CHROME_WRAPPER"`"

which npm > /dev/null && {
    echo 'No node/npm installed.'
}

which grunt > /dev/null && {
    echo 'No grunt installed.'
}

git clone https://github.com/dragoscirjan/coding-standards.git /tmp/coding-standards
cd /tmp/coding-standards && git checkout html && npm install

grunt
cp -rdf docs/* $HERE/../coding-standards

cd $HERE/..
git add . -f && git commit -a -m "coding standards updates" && git push origin master

rm -rf /tmp/coding-standards
