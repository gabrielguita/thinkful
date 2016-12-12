
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', { //test
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
        .when('/new-meal', {
            templateUrl : 'new-meal.html',
            controller : 'NewMealCtrl',
            controllerAs: 'vm'
        })
        .when('/my-earnings', {
            templateUrl : 'my-earnings.html',
            controller : 'MyEarningsCtrl',
        	controllerAs: 'vm'
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
    .controller('NewMealCtrl',  ['dataService', function(dataService) {
		var vm = this;
		vm.bill = {};
		
		vm.bill.subTotal = '0.00';
		vm.bill.tip = '0.00';
		vm.bill.total = '0.00';
		vm.bill.tipTotal = '0.00';
		vm.bill.averageTipPerMeal = '0.00';

	 	vm.bill.mealCounter = 0;


		// vm.btnSubmit = function(mealCount){

		// 	vm.bill.percentValue = (vm.bill.taxeRate / 100) * vm.bill.baseMealPrice;

		// 	vm.bill.subTotal = vm.bill.percentValue + vm.bill.baseMealPrice;

		// 	vm.bill.tip = (vm.bill.tipPergentage / 100) * vm.bill.subTotal;

		// 	vm.bill.total = vm.bill.subTotal + vm.bill.tip;

		// 	vm.bill.mealCounter += mealCount;

		// 	vm.bill.tipTotal = vm.bill.tip * vm.bill.mealCounter;

		// 	vm.bill.averageTipPerMeal = vm.bill.tipTotal / vm.bill.mealCounter;	 
			
		// 	dataService.set(vm.bill);
		// 	//$scope.$broadcast('billValue', vm.bill);
		// }

		// vm.btnCancel = function () {
		// 	vm.bill.baseMealPrice = '';
		// 	vm.bill.taxeRate = ''
		// 	vm.bill.tipPergentage = '';
		// }
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
            // enable http caching
           $httpProvider.defaults.cache = true;
    }]);