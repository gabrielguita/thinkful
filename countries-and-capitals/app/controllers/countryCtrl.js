angular.module('countriesApp')
	.controller('CountryCtrl', ['$scope', '$state', 'dataFactory', function($scope, $state, dataFactory) {
		$scope.country = dataFactory.getCountry($state.params.country);	
		console.log($state);	 
		$scope.save = function(){
			$scope.country.save(); 
		}

	}]);