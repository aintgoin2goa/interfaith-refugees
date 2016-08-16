"use strict";
const co = require('co');
const getData = require('./getData');
const Handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');
const colors = require('./colors');
const transform = require('./transform');


const DIST_PATH = path.resolve(__dirname, '../dist/');
const SRC_PATH = path.resolve(__dirname, '../src/');
const TEMPLATE_PATH = path.resolve(SRC_PATH, 'template.html');
const DIST_FILE = path.resolve(DIST_PATH, 'index.html');

co(function* (){
	let data = yield getData();
	console.log(`Got ${data.length} rows from spreadsheet`);
	data = transform(data);
	let templateSrc = fs.readFileSync(TEMPLATE_PATH, {encoding:'utf8'});
	let template = Handlebars.compile(templateSrc);
	let templateData = {
		signatories: data,
		count: data.length
	};
	let result = template(templateData);
	fs.writeFileSync(DIST_FILE, result, {encoding:'utf8'});
})
	.then(() => {
		console.log(colors.success('BUILD COMPLETE'));
	})
	.catch(err => {
		console.error(colors.error(err.stack));
		process.exit(1);
	});
