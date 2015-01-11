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
    
    function numItems(){        
        console.log(resource.get().numItems);
        return resource.get().numItems;
    }

    return {
        getPublicAds : getPublicAds,
        edit : editAd,
        getAdById: getAdById,
        add : addAd,
        delete : deleteAd,
        numItems : numItems
    };
}]);
