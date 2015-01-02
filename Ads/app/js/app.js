var app = angular.module('ads', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider.when('/register', {
                templateUrl: '/templates/register.html', controller: 'MainController' });
        });