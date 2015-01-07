var app = angular.module('ads', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider.when('/register', {
                templateUrl: '/templates/register.html', controller: 'HomeController' });
            $routeProvider.when('/login', {
                templateUrl: '/templates/login.html', controller: 'HomeController' });
            $routeProvider.when('/ads', {
                templateUrl: '/templates/home.html', controller: 'HomeController' });
            $routeProvider.otherwise({redirectTo: '/ads'})
        }); 