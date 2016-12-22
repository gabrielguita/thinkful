angular.module('myApp')
	.controller('DynamicCityCtrl', ['$scope', '$routeParams', 'dataFactory', function($scope, $routeParams, dataFactory) {
		$scope.country = dataFactory.getCountry($routeParams.city);
		console.log($scope.country);

		$scope.save = function(){
			$scope.country.save(); 
		}
	}]);