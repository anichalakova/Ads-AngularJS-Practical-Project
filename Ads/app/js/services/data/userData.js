app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication){      
    
    function registerUser(user){
        var resource = $resource(baseServiceUrl + 'user/register') 
                .save(user);
        
        resource.$promise
            .then(function (data){
                authentication.saveUser(data);   
            });

         return resource;
    }
    
     function loginUser(user){
        var resource = $resource(baseServiceUrl + 'user/login') 
                .save(user);
        
        resource.$promise
            .then(function (data){
                authentication.saveUser(data);                  
            });

         return resource;
    }
    
     function logoutUser(){
        showInfoMessage('You have logged out successfully!');
        delete localStorage['user'];
    }
    
   return {
       register: registerUser,
       login : loginUser,
       logout: logoutUser
   }     
}]);