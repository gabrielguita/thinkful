
angular.module('myApp', [])
.controller('waitstaff', ['$scope', function($scope) {

	var vm = this;
	vm.bill = {};

	vm.btnSubmit = function(){
		console.log(vm.bill);
	}

	vm.btnReset = function () {
		vm.bill = {};
	}

}]);