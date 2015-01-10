app.factory('filter', function(){
    var filterParams = {};
    
    function filterByCategory(category){
        if (category) {
            filterParams.categoryId = category.id;
        }  else {
            filterParams.categoryId = null;
        }      
    }
    
    function filterByTown(town){
        if (town) {
            filterParams.townId = town.id;
        } else {
            filterParams.townId = null;
        }     
    }
    
    function getFilterParams(){
        return filterParams;
    }
    
    return {
        filterByCategory : filterByCategory, 
        filterByTown : filterByTown,
        getFilterParams : getFilterParams
    }
}
        
);