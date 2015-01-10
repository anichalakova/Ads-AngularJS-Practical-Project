app.factory('filtersData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
        
    function getAllTowns(){      
        var resource = $resource(baseServiceUrl + 'towns');
        return resource.query();
    }
    
    function getCategories(){      
        var resource = $resource(baseServiceUrl + 'categories');
        return resource.query();
    }
    
    return {
        getTowns: getAllTowns,
        getCategories : getCategories
    };
}]);