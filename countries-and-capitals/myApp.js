angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {  
            templateUrl : 'home.html',
            controller : 'HomeCtrl',
            controllerAs: 'vm'
        })
		.when('/cities/:city', {
		    templateUrl : 'dynamicDataCity.html',
		    controller : 'DynamicCityCtrl',
		    controllerAs: 'vm',
		    resolve : {
		        city: function(owmCities, $route, $location) {
		            var city = $route.current.params.city;
		            if(owmCities.indexOf(city) === -1 ) {
		                $location.path('/error');
		                return;
		            }
		            return city;
		        }
		    }
		})
        .when('/countries', {
            templateUrl : 'countries.html',
            controller : 'countriesCtrl',
            controllerAs: 'vm'
        })
		.otherwise('/home');
    }])
	.controller('DynamicCityCtrl', ['$scope', 'dataFactory', function($scope, $routeParams, dataFactory) {
		console.log($routeParams);
		$scope.templateUrl = $routeParams.name;
	}]) 
    .controller('countriesCtrl', ['$scope', 'dataFactory', function($scope, dataFactory) {

		var vm = this;

		$scope.customers;

	    getCustomers();

	    function getCustomers() {
    		dataFactory.getCustomers()
	            .then(function (response) {
	                $scope.customers = response.data.geonames;
	              
	            }, function (error) {
	                $scope.status = 'Unable to load customer data: ' + error.message;
	            });
	    }

    }])
    .controller('HomeCtrl', [function() {
        //console.log('dasda');
    }]) 
     //  .service('dataService', ['$http', function ($http) {

     //    var urlBase = 'http://api.geonames.org/countryInfoJSON?username=gabrielgi';

     //    this.getCustomers = function () {
     //        return $http.get(urlBase);
     //    };
     // }])
     .factory('dataFactory', ['$http', function($http) {

	    var urlBase = 'http://api.geonames.org/countryInfoJSON?username=gabrielgi';
	    var dataFactory = {};

	    dataFactory.getCustomers = function () {
	        return $http.get(urlBase);
	    };
 
    	return dataFactory;
	}]) 
    .config(['$httpProvider', function ($httpProvider) {
		$httpProvider.defaults.cache = true;
    }]);