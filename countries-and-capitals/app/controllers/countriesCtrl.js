angular.module('countriesApp')
.controller('CountriesCtrl', ['$scope', '$state', 'dataFactory', function($scope, $state, dataFactory) {

	var vm = this;
	
	$scope.geonames;

    getGeonames();
    
	//console.log($state);

	$scope.go = function (path) {
		//console.log(path);
		$state.go('country', {country: path});
	};

    function getGeonames() {
		dataFactory.getGeonames()
            .then(function (response) {
                $scope.geonames = response.data.geonames;
               
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

}]);