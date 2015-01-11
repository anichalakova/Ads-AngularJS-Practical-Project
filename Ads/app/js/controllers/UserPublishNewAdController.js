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
    
    $scope.fileSelected = function(fileInputField) {
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.adData.imageDataUrl = reader.result;
                        $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.pageTitle = 'Publish New Ad';
  }
);
