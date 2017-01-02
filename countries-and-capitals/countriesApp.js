angular.module('countriesApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        
        $stateProvider.state('home', {  
            templateUrl : 'views/home.html',
            controller : 'HomeCtrl',
            controllerAs: 'vm',
            url: '/'
        })
		.state('country', {
		    templateUrl : 'views/country.html',
		    controller : 'CountryCtrl',
		    controllerAs: 'vm',
		    url: '/countries/:country'
		})
        .state('countries', {
            templateUrl : 'views/countries.html',
            controller : 'CountriesCtrl',
            controllerAs: 'vm',
            url: '/countries'
        })
        $urlRouterProvider.otherwise('/404');
        console.log($stateProvider);

    }])
	.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.defaults.cache = true;
	}
]);