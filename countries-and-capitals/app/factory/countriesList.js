// Factory
angular.module('myApp')
	.factory('dataFactory', ['$http', function($http) {

	    var urlBase = 'http://api.geonames.org/countryInfoJSON?username=gabrielgi';
	    var dataFactory = {};
      var pool = {};


	    dataFactory.getCustomers = function () {
	       // return $http.get(urlBase);
        return this.getCustomersFromServer().then(function(response) {
        
          response.data.geonames.forEach(function(country){
              pool[country.countryCode] = country;
          })
          
          console.log(pool);

          return response;

        });

	    };
 
      dataFactory.getCountry = function(value){
        console.log(pool);
        if(pool[value])
        return pool[value];
      }

       dataFactory.getCustomersFromServer = function(){
            return $http.get(urlBase);     
       }



    	return dataFactory;
	}]) 


// function InboxService($http) {
//   return {
//     getEmails: function () {
//       return $http.get('/emails');
//     }
//   };
// }
// angular
//   .module('app')
//   .factory('InboxService', InboxService);