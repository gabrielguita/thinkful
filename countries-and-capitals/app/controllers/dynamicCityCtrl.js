//DynamicCityCtrl
angular.module('myApp', ['ngRoute'])
	.controller('DynamicCityCtrl', ['$scope', 'dataFactory', function($scope, $routeParams, dataFactory) {
		console.log($routeParams);
		$scope.templateUrl = $routeParams.name;
	}]);