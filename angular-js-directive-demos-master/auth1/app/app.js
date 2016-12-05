angular.module('authDemo1', ['ngRoute'])
	.config(function($httpProvider, $routeProvider, $locationProvider) {
		
		// add interceptor
		$httpProvider.interceptors.push('authenticationInterceptor');

		$locationProvider.html5Mode(true);

		// routing logic
		$routeProvider
		.when('/', {
			controller : 'HomePageController',
			templateUrl: 'home.html',
			resolve: {
				repos: function(ghRepos) {
					return ghRepos();
				}
			}
		})
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'LoginController'
		})
		.when('/logout', {
			template: '',
			controller: 'LogoutController'
		})
		.otherwise({
			redirectTo: '/'
		})
	})
	.factory('userSession', function() {
		return {
			loggedIn: false
		}
	})
	.factory('authenticationInterceptor', function(userSession, $location) {
		return {
			request: function(request) {
				if(request.url.match(/api/) && userSession.loggedIn==false) {
					var previousPage = $location.path();
					$location.path('/login').search({
						previous: previousPage
					});
				}
				return request;
			}
		}
	})
	.factory('ghRepos', function($http) {
		return function() {
			return $http.get('https://api.github.com/repositories');
		};
	})
	.controller('MainController', function($scope, userSession) {
		// debugger;
		$scope.loggedIn = userSession.loggedIn = false; 
		$scope.$watch(function(){return userSession.loggedIn}, function(newVal, oldVal){
			$scope.loggedIn = newVal;
		})
	})
	.controller('LoginController', function(userSession, $location) {
		var ctrl = this;
		ctrl.previousPage = $location.search().previous;
		ctrl.login = function(username, password) {
			this.loginFailed = null;
			if(username == 'user' && password == 'password') {
				userSession.loggedIn = true;
				$location.path(ctrl.previousPage || '/');
			} else {
				this.loginFailed = true;
			}
		}
	})
	.controller("LogoutController", function(userSession, $location){
		userSession.loggedIn=false;
		console.log('loggedout');
		$location.path('/login');
	})
	.controller('HomePageController', function($scope, repos) {
		$scope.popularRepos = repos.data;
	})