angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {  
            templateUrl : 'views/home.html',
            controller : 'HomeCtrl',
            controllerAs: 'vm'
        })
		.when('/countries/:city', {
		    templateUrl : 'views/dynamicDataCity.html',
		    controller : 'DynamicCityCtrl',
		    controllerAs: 'vm'
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
	}
]);