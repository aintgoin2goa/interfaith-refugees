"use strict";
const colors = require('./colors');
const _ = require('lodash');

const regexs = new Map();

regexs.set('bishop', /bishop/i);
regexs.set('lords', /(Lord|Lady)/);
regexs.set('honors', /(CBE|MBE|OBE)/);
regexs.set('rowanWilliams', /Dr Rowan Williams/i);


function transform(d){
	let data = _.cloneDeep(d);
	let first = [];
	let lords = [];
	let bishops = [];
	let honors = [];
	let noPost = [];
	let theRest = [];
	data.forEach((item) => {
		if(regexs.get('rowanWilliams').test(item.name)) {
			first.push(item);
		}else if(regexs.get('lords').test(item.name)){
			lords.push(item);
		}else if(regexs.get('bishop').test(item.post)){
			bishops.push(item);
		}else if(regexs.get('honors').test(item.name)){
			honors.push(item);
		}else if(item.post.trim() === ''){
			noPost.push(item);
		}else{
			theRest.push(item);
		}
	});

	return first.concat(lords).concat(bishops).concat(honors).concat(theRest).concat(noPost);
}

module.exports = transform;
