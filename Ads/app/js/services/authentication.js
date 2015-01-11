app.factory('authentication', [function(){
        
    var key = 'user';
   
    function saveUserData(data){
        localStorage.setItem(key, angular.toJson(data));
    }
    
    function getUserData(data){
        return angular.fromJson(localStorage.getItem(key));
    }
    
    function getHeaders(){
        var headers = {};
        var userData = getUserData();
            if (userData) {
                headers.Authorization = 'Bearer ' + getUserData().access_token;
            }        
            return headers;
    }
    
    function removeUser(){
        localStorage.removeItem(key);
    }
    
    function isAdmin(){
        var isAdmin = getUserData().isAdmin;
        return isAdmin;
    }
    
    function isLogged(){        
        return !!getUserData();
    }
    
     function setUsername(){
        if (getUserData()) {
            return getUserData().username;            
        }        
    }
    
   return {
       saveUser: saveUserData, 
       getUser: getUserData,
       getHeaders: getHeaders,
       removeUser: removeUser,
       isAdmin: isAdmin,
       isLogged: isLogged,
       setUsername : setUsername
   }     
}]);


