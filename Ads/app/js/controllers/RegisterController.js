'use strict';

app.controller('RegisterController', ['$scope', '$location', 'filtersData', 'userData', function($scope, $location, filtersData, userData){   
    
    $scope.pageTitle = 'Register';
    
    filtersData.getTowns()
            .$promise
            .then(function(data){
                $scope.towns = data;                
            });
    
     $scope.register = function (user) {
        userData.register(user)
                .$promise
                .then(function(data){
                    $location.path('/');
                });
    }
}]);