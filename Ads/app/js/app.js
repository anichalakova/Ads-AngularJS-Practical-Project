'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule', 'ui.bootstrap.pagination']);

app.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider ){
    $routeProvider.when('/register', {
        templateUrl: '/templates/register.html', controller: 'RegisterController' });
    $routeProvider.when('/login', {
        templateUrl: '/templates/login.html', controller: 'LoginController' });
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html', controller: 'HomeController' });
    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/publish-new-ad.html', controller: 'UserPublishNewAdController'});
    $routeProvider.otherwise({redirectTo: '/'});
    

    //Web storage settings
    localStorageServiceProvider.setStorageType('localStorage');
    localStorageServiceProvider.setPrefix('adsApp');
}]); 

app.run(function ($rootScope, $location, authentication) {
  $rootScope.$on('$locationChangeStart', function (event) {
    if ($location.path().indexOf("/user/") !== -1 && !authentication.isLogged()) {
      // Authorization check: anonymous site visitors cannot access user routes
      $location.path("/");
    }
  });
});


app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');        
        