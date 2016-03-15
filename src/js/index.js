// Javascript Entry Point

import $ from 'jquery';

// var url = 'https://api.github.com/users/jisaacks/orgs?access_token=ac49358f7dcbd22a5887ff8fda3dedbeeed5198d';

var url = 'https://api.github.com/users/jisaacks/orgs';


var $main = $('main');

$.ajax(url).then(function(array){

	$main.append(array.map(function({login, avatar_url}){
		return `<div><img src="${avatar_url}"><h2>${login}</h2></div>`
	}));
	
});