'use strict';

var lstorageControllers = angular.module('lstorageControllers', []);

lstorageControllers.controller('MainCtrl', ['$scope', function($scope){
	$scope.link = "";
	$scope.categories = [
		'cat1',
		'cat2',
		'cat3',
		'cat4',
		'cat5'
	];

	$scope.links = [];

	for(var i=0;i<25;i++){
		$scope.links.push('link '+ i);
	}

	$scope.addLink = function(l){
		$scope.links.push(l);
	}

}])
