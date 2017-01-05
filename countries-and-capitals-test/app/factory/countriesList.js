// Factory
angular.module('countriesApp')
	.factory('dataFactory', ['$http', 'Country', function($http, Country) {

	    var urlBase = 'http://api.geonames.org/countryInfoJSON?username=gabrielgi';
	    var dataFactory = {};
      var countryData = {};

	    dataFactory.getGeonames = function () {
        return this.getCustomersFromServer().then(function(response) {
        
          response.data.geonames.forEach(function(country){
              var dataCountry = new Country(country);
              countryData[country.countryCode] = dataCountry;
          })
          
          return response;
        });

	    };
 
      dataFactory.getCountry = function(value){
        if(countryData[value])
        return countryData[value];
      }

       dataFactory.getCustomersFromServer = function(){
            return $http.get(urlBase);     
       }

    	return dataFactory;
	}]) 