'use strict';

var lstorageControllers = angular.module('lstorageControllers', []);

lstorageControllers.controller('MainCtrl', ['$scope', function($scope){
	$scope.maxMessage = "hey what's up";
}])
