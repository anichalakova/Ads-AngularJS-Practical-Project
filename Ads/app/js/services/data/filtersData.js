app.factory('filtersData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
        
    function getTowns(){      
        var resource = $resource(baseServiceUrl + 'towns');
        return resource.query();
    }
    
    function getCategories(){      
        var resource = $resource(baseServiceUrl + 'categories');
        return resource.query();
    }
    
    return {
        getTowns: getTowns,
        getCategories : getCategories
    };
}]);