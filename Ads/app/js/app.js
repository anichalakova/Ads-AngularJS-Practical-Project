var app = angular.module('ads', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider.when('/register', {
                templateUrl: '/templates/register.html', controller: 'MainController' });
            $routeProvider.when('/login', {
                templateUrl: '/templates/login.html', controller: 'MainController' });
            $routeProvider.when('/ads', {
                templateUrl: '/templates/all-ads.html', controller: 'MainController' });
            $routeProvider.otherwise({redirectTo: '/ads'})
        });