angular.module('myApp')
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

    }]);