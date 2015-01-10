app.controller('FiltersController', ['$scope', '$rootScope', 'filtersData', 'filter', function($scope, $rootScope, filtersData, filter){   
    
    filtersData.getTowns()
                .$promise
                .then(function(data){
                    $scope.towns = data;
                });
    
    
    filtersData.getCategories()
            .$promise
            .then(function(data){
                $scope.categories = data;
            });

//    function loadCategories(params){
//        var params = params || {};
//            filtersData.getCategories()
//            .$promise
//            .then(function(data){
//                $scope.categories = data;
//            });
//    }
    
    
    
    $scope.categoryClicked = function categoryClicked (category) {
        filter.filterByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
    };
    
    $scope.townClicked = function townClicked (town) {
        filter.filterByTown(town);
        $rootScope.$broadcast('townClicked', town);
    };
    
    $scope.selectedCatId = null;
    
    $scope.setSelectedCat = function (selectedId) {
       $scope.selectedCatId = selectedId;
    };
    
    $scope.selectedTownId = null;
    
    $scope.setSelectedTown = function (selectedId) {
       $scope.selectedTownId = selectedId;
    };
}]);


