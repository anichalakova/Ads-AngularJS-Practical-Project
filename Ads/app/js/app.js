'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule']);

app.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider ){
    $routeProvider.when('/register', {
        templateUrl: '/templates/register.html', controller: 'RegisterController' });
    $routeProvider.when('/login', {
        templateUrl: '/templates/login.html', controller: 'LoginController' });
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html', controller: 'HomeController' });
    $routeProvider.otherwise({redirectTo: '/'});

    //Web storage settings
    localStorageServiceProvider.setStorageType('localStorage');
    localStorageServiceProvider.setPrefix('adsApp');
}]); 

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
        
        