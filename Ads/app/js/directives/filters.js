app.directive('filters', function(){
        return {
            controller: 'FiltersController',
            restrict: 'E',
            templateUrl: 'templates/filters.html',
            replace: true,
        }
    }        
);