app.controller('HomeController', function($scope, mainData){   
    
    $scope.pageTitle = 'Home';
    mainData.getAllAds(function(resp){
        $scope.data = resp;
    });
    
    mainData.getAllTowns(function(resp){
        $scope.towns = resp;
    });
    
    mainData.getAllCategories(function(resp){
        $scope.categories = resp;
    });
    
    $scope.selectedNavId = null;
    
    $scope.selectedCatId = null;
    $scope.setSelectedCat = function (selectedId) {
       $scope.selectedCatId = selectedId;
    };
    
    $scope.selectedTownId = null;
        $scope.setSelectedTown = function (selectedId) {
       $scope.selectedTownId = selectedId;
    };
});