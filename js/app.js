'use strict';

var lstorageApp = angular.module("lstorageApp", [
	'lstorageControllers',
	'lstorageServices',
	'ui.bootstrap'
])

.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
})

.run(function ($rootScope, AUTH_EVENTS, AuthService) {
	// $rootScope.$on('$stateChangeStart', function (event, next) {
 //    console.log("$stateChangeStart")
	// 	var authorizedRoles = next.data.authorizedRoles;
	// 	if (!AuthService.isAuthorized(authorizedRoles)) {
	// 		event.preventDefault();
	// 		if (AuthService.isAuthenticated()) {
	// 	    	// user is not allowed
	// 	    	$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
	// 		} else {
	// 		    // user is not logged in
	//		    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
	// 	  	}
	// 	}
	// });
  // setTimeout(function(){
    // $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
  // })
})

.config(function ($httpProvider) {
	// $httpProvider.interceptors.push([
	// 	'$injector',
	// 	function ($injector) {
	// 		return $injector.get('AuthInterceptor');
	// 	}
	// ]);
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function (response) { 
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized,
        419: AUTH_EVENTS.sessionTimeout,
        440: AUTH_EVENTS.sessionTimeout
      }[response.status], response);
      return $q.reject(response);
    }
  };
})

.directive('loginDialog', function (AUTH_EVENTS, AuthService) {
  return {
    restrict: 'A',
    templateUrl: 'tpls/login.html',
    controller: LoginCtrl,
    link: function(scope){
      // scope.visible = true;
      // var showDialog = function(){
      //   // scope.$apply(function(){
      //     scope.visible = true;
      //   // })
      //   // scope.$apply()
      // };

      // var hideDialog = function(){
      //   scope.visible = false;
      // }

      // if(!AuthService.isAuthenticated){
      //   showDialog()
      // }
      
      // hideDialog()
      // scope.$on(AUTH_EVENTS.loginSuccess, hideDialog);
      // scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
      // scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);
    }
  }
})
