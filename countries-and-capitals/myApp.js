angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {  
            templateUrl : 'views/home.html',
            controller : 'HomeCtrl',
            controllerAs: 'vm'
        })
		.when('/cities/:city', {
		    templateUrl : 'views/dynamicDataCity.html',
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
            templateUrl : 'views/countries.html',
            controller : 'countriesCtrl',
            controllerAs: 'vm'
        })
		.otherwise('/home');
    }])
    .config(['$httpProvider', function ($httpProvider) {
		$httpProvider.defaults.cache = true;
    }]);