app.factory('mainData', function($http, $log){
    return{
        getAllAds: function(success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads'})
                    .success(function(data, status, headers, config){
                        success(data);
                    })
                    .error(function(data, status, headers, config){
                        $log.warn(data);
                    });
        }
    };
    
}); 