// Factory
angular.module('myApp')
	.factory('dataFactory', ['$http', 'Country', function($http, Country) {

	    var urlBase = 'http://api.geonames.org/countryInfoJSON?username=gabrielgi';
	    var dataFactory = {};
      var pool = {};

	    dataFactory.getCustomers = function () {
        return this.getCustomersFromServer().then(function(response) {
        
          response.data.geonames.forEach(function(country){
              var dataCountry = new Country(country);
              pool[country.countryCode] = dataCountry;
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