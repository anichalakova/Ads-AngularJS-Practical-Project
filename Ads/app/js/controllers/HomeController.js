'use strict';

app.controller('HomeController', ['$scope', 'authentication', 'userData', function($scope, authentication, userData){   
    
    $scope.pageTitle = 'Home';
    $scope.isLoggedIn = authentication.isLogged();
    $scope.username = authentication.setUsername();
    $scope.logout = userData.logout;     
    $scope.selectedLink = 'home';
    $scope.setSelectedNav = function (linkName) {
    $scope.selectedLink = linkName;    
    };
}]);