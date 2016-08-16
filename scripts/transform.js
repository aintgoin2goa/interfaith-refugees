"use strict";
const colors = require('./colors');
const _ = require('lodash/core');


function check(item){
	if(!item.name){
		console.log(colors.warn(`Missing property name: ${JSON.stringify(item)}`))
	}

	if(!item.post){
		console.log(colors.warn(`Missing property post: ${JSON.stringify(item)}`))
	}
}

function transform(d){
	let data = JSON.parse(JSON.stringify(d));
	data.forEach((item, index) => {
		
	})
	return sort(data);
}

function sort(data){
	return _.sortBy(data, d => d.post);
}

module.exports = transform;
