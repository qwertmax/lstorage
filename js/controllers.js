'use strict';

var lstorageControllers = angular.module('lstorageControllers', []);

lstorageControllers.controller('MainCtrl', ['$scope', 'USER_ROLES', 'AuthService', function($scope, USER_ROLES, AuthService){
	$scope.link = "";
	$scope.categories = [
		'cat1',
		'cat2',
		'cat3',
		'cat4',
		'cat5'
	];

	$scope.links = [];

	for(var i = 0; i < 25; i++){
		$scope.links.push('link '+ i);
	}

	$scope.addLink = function(l){
		$scope.links.unshift(l);
		$scope.link = "";
	}

	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.isAuthorized = AuthService.isAuthorized;

	$scope.setCurrentUser = function (user) {
		$scope.currentUser = user;
	};

}]) 

lstorageControllers.controller('LoginCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService' , LoginCtrl]);
