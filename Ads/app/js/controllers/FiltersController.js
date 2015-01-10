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
    
    $scope.selectedCatId = null;
    
    function setSelectedCat(category) {
       $scope.selectedCatId = category.id;
    };
    
    $scope.selectedTownId = null;
    
    function setSelectedTown(town) {
       $scope.selectedTownId = town.id;
    };  
    
    $scope.categoryClicked = function categoryClicked (category) {
        setSelectedCat(category);
        filter.filterByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
    };
    
    $scope.townClicked = function townClicked (town) {
        filter.filterByTown(town);
        setSelectedTown(town);
        $rootScope.$broadcast('townClicked', town);
    };
    

}]);


