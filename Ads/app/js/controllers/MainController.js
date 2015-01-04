app.controller('MainController', function($scope, mainData){   
    mainData.getAllAds(function(resp){
        $scope.data = resp;
    });
    
    mainData.getAllTowns(function(resp){
        $scope.towns = resp;
    });
    
    mainData.getAllCategories(function(resp){
        $scope.categories = resp;
    });
    
    $scope.selectedCatId = null;
    $scope.selectedTownId = null;
    $scope.setSelectedCat = function (selectedId) {
       $scope.selectedCatId = selectedId;
    };
        $scope.setSelectedTown = function (selectedId) {
       $scope.selectedTownId = selectedId;
    };
});