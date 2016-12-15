//DynamicCityCtrl
angular.module('myApp')
	.controller('DynamicCityCtrl', ['$scope', '$routeParams', 'dataFactory', function($scope, $routeParams, dataFactory) {
		 
		//$scope.templateUrl = $routeParams.city;

		$scope.country = dataFactory.getCountry($routeParams.city);
		console.log($scope.country);
	}]);