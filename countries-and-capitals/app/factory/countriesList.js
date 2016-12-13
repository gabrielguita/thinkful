// Factory
angular.module('myApp', ['ngRoute'])
	.factory('dataFactory', ['$http', function($http) {

	    var urlBase = 'http://api.geonames.org/countryInfoJSON?username=gabrielgi';
	    var dataFactory = {};

	    dataFactory.getCustomers = function () {
	        return $http.get(urlBase);
	    };
 
    	return dataFactory;
	}]) 


function InboxService($http) {
  return {
    getEmails: function () {
      return $http.get('/emails');
    }
  };
}
angular
  .module('app')
  .factory('InboxService', InboxService);