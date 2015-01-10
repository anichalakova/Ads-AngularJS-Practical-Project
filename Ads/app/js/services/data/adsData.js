app.factory('adsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: {method : 'PUT'}
    });
    
    function getPublicAds(filterParams){
        return resource.get(filterParams);
    }    
    
    function editAd(adId, ad){
        return resource.update({id: adId}, ad);
    }
    
    function getAdById(adId){
        return resource.get({id: adId});
    }
    
    function addAd(ad){
        return resource.save(ad);
    }
    
    function deleteAd(adId){
        return resource.delete({id: adId});
    }

    return {
        getPublicAds : getPublicAds,
        edit : editAd,
        getAdById: getAdById,
        add : addAd,
        delete : deleteAd
    };
}]);
//
////app.factory('mainData', function($http, $log){
//    return{
//        getPublicAds: function(success) {
//            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads'})
//                    .success(function(data, status, headers, config){
//                        success(data);
//                    })
//                    .error(function(data, status, headers, config){
//                        $log.warn(data);
//                    });
//        },
//        
//        getAllTowns: function(success) {
//            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
//                    .success(function(data, status, headers, config){
//                        success(data);
//                    })
//                    .error(function(data, status, headers, config){
//                        $log.warn(data);
//                    });
//        },
//        
//         getAllCategories: function(success) {
//            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
//                    .success(function(data, status, headers, config){
//                        success(data);
//                    })
//                    .error(function(data, status, headers, config){
//                        $log.warn(data);
//                    });
//        }
//    };
//}); 