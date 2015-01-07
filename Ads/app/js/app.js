var app = angular.module('ads', ['ngRoute', 'ngResource'])
        .config(function($routeProvider){
            $routeProvider.when('/register', {
                templateUrl: '/templates/register.html', controller: 'RegisterController' });
            $routeProvider.when('/login', {
                templateUrl: '/templates/login.html', controller: 'LoginController' });
            $routeProvider.when('/ads', {
                templateUrl: '/templates/home.html', controller: 'HomeController' });
            $routeProvider.otherwise({redirectTo: '/ads'});
        }); 
        
        app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');