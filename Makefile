
build:
	./node_modules/.bin/node-sass src/scss/main.scss --output dist/
	./node_modules/.bin/node-sass src/scss/ie8.scss --output dist/
	node scripts/build.js

run:
	./node_modules/.bin/static-server -p 1209
