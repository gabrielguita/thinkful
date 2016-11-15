
angular.module('myApp', [])
.controller('waitstaff', ['$scope', function($scope) {

	var vm = this;

	vm.bill = {};
	
	vm.bill.subTotal = '0.00';
	vm.bill.tip = '0.00';
	vm.bill.total = '0.00';
	vm.bill.tipTotal = '0.00';
	vm.bill.averageTipPerMeal = '0.00';

 	vm.bill.mealCounter = 0;

	vm.btnSubmit = function(mealCount){

		vm.bill.percentValue = (vm.bill.taxeRate / 100) * vm.bill.baseMealPrice;

		vm.bill.subTotal = vm.bill.percentValue + vm.bill.baseMealPrice;

		vm.bill.tip = (vm.bill.tipPergentage / 100) * vm.bill.subTotal;

		vm.bill.total = vm.bill.subTotal + vm.bill.tip;

		vm.bill.mealCounter += mealCount;

		vm.bill.tipTotal = vm.bill.tip * vm.bill.mealCounter;

		vm.bill.averageTipPerMeal = vm.bill.tipTotal / vm.bill.mealCounter;	 
	}

	vm.btnCancel = function () {
		vm.bill.baseMealPrice = '';
		vm.bill.taxeRate = ''
		vm.bill.tipPergentage = '';
	}

	vm.btnReset = function () {
		vm.bill.subTotal = '0.00';
		vm.bill.tip = '0.00';
		vm.bill.total = '0.00';
		vm.bill.tipTotal = '0.00';
		vm.bill.averageTipPerMeal = '0.00';
		vm.bill.mealCounter = 0;
	}

}]);