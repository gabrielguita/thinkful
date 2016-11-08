
angular.module('myApp', [])
.controller('madlibs', ['$scope', function($scope) {

	var vm = this;
	vm.user = {};

	vm.inputScreen = true;
	vm.resultScreen = false;

	vm.sendData = function(){
		vm.inputScreen = false;
		vm.resultScreen = true;
	}

	vm.startOVer = function () {
		vm.inputScreen = true;
		vm.resultScreen = false;
		vm.user = {};
	}

}]);