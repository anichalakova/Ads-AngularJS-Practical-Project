app.controller('PublicAdsController', ['$scope', 'adsData', 'filter', function($scope, adsData, filter){      
//    adsData.getPublicAds()
//                .$promise
//                .then(function(data){
//                    $scope.adsData = data;
//                });   
    
    function loadPublicAds(filterParams){        
        filterParams = filterParams || {};
        adsData.getPublicAds(filterParams)
                .$promise
                .then(function(data){
                    $scope.adsData = data;
                });
    }

    loadPublicAds();
    
    
//    
//    $scope.loadPublicAds = function (){
//        console.log("loadPublicAdsClicked");
//            loadPublicAds();
//    }
        
    $scope.$on('categoryClicked', function (event, category){
        loadPublicAds(filter.getFilterParams());
    });   
    
    $scope.$on('townClicked', function (event, town){
        loadPublicAds(filter.getFilterParams());
    }); 
}]);