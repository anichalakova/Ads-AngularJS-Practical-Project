'use strict';

app.controller('UserPublishNewAdController',
  function ($scope, $location, filtersData,
            userService) {
    $scope.adData = {townId: null, categoryId: null};
    $scope.categories = filtersData.getCategories();
    $scope.towns = filtersData.getTowns();

    $scope.publishAd = function(adData) {
        userService.createNewAd(adData,
            function success() {
                // TODO: show “success” info message
                $location.path("/user/ads");
            },
            function error(err) {
                // TODO: show error message
            }
        );
    };
    $scope.pageTitle = 'Publish New Ad';
  }
);
