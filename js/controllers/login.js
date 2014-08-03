'use strict';

function LoginCtrl($scope, $rootScope, AUTH_EVENTS, AuthService){
  if(AuthService.isAuthenticated())
    $scope.visible = false;
  else
    $scope.visible = true;

  $scope.credentials = {
    username: '',
    password: ''
  };
  var showDialog = function(){
      $scope.visible = true;
  };

  var hideDialog = function(){
    $scope.visible = false;
  }

  $scope.$on(AUTH_EVENTS.loginSuccess, hideDialog);
  $scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
  $scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);


  $scope.login = function (credentials) {
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
}
