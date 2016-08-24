"use strict";
const colors = require('./colors');
const _ = require('lodash');

const regexs = new Map();

regexs.set('bishop', /bishop/i);
regexs.set('honors', /(CBE|MBE|OBE|Lord|Lady)/);


function transform(d){
	let data = _.cloneDeep(d);
	let bishops = [];
	let honors = [];
	let noPost = [];
	let theRest = [];
	data.forEach((item, index) => {
		if(regexs.get('bishop').test(item.post)){
			bishops.push(item);
		}else if(regexs.get('honors').test(item.name)){
			honors.push(item);
		}else if(item.post.trim() === ''){
			noPost.push(item);
		}else{
			theRest.push(item);
		}
	});

	return bishops.concat(honors).concat(theRest).concat(noPost);
}

module.exports = transform;
