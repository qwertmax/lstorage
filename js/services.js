'use strict';

var lstorageServices = angular.module('lstorageServices', []);

lstorageServices.service('userLinks', ['$http', function($http){
	$http.get({
		method: "GET",
		url: "/userLinks"
	}).
	success(function(){
		
	});
}])

lstorageServices.factory('AuthService', function ($http, Session) {
  var authService = {};
 
  authService.login = function (credentials) {
    return $http
      .post('/login', credentials)
      .then(function (res) {
      	res = res.data
        // Session.create(res.id, res.user.id, res.user.role);
        Session.create(res.Id, res.User.Id, res.User.Role);
        return res.User;
      });
  };
 
  authService.isAuthenticated = function () {
    return !!Session.userId;
  };
 
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };
 
  return authService;
})

lstorageServices.service('Session', function () {
  this.create = function (sessionId, userId, userRole) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };
  return this;
})
