
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', { //test
            templateUrl : 'home.html',
            controller : 'HomeCtrl',
            controllerAs: 'vm'
        })
        .when('/new-meal', {
            templateUrl : 'new-meal.html',
            controller : 'NewMealCtrl',
            controllerAs: 'vm'
        })
        .when('/my-earnings', {
            templateUrl : 'my-earnings.html',
            controller : 'MyEarningsCtrl',
        	controllerAs: 'vm'
        }).when('/error', {
			template : '<p>Error - Page Not Found</p>'
		})
		.otherwise('/home');
    }])
    .controller('HomeCtrl', [function() {
        //console.log('dasda');
    }])
    .controller('NewMealCtrl',  ['dataService', function(dataService) {
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
			
			dataService.set(vm.bill);
			//$scope.$broadcast('billValue', vm.bill);
		}

		vm.btnCancel = function () {
			vm.bill.baseMealPrice = '';
			vm.bill.taxeRate = ''
			vm.bill.tipPergentage = '';
		}
    }])
    .controller('MyEarningsCtrl', ['dataService', function(dataService) {

		var vm = this;

		vm.bill = dataService.get();

		// $scope.$on('billValue', function(event, data){
		// 	vm.bill = data;
		// })
		console.log(dataService.get());
console.log(vm.bill);

    	vm.btnReset = function () {
			vm.bill.subTotal = '0.00';
			vm.bill.tip = '0.00';
			vm.bill.total = '0.00';
			vm.bill.tipTotal = '0.00';
			vm.bill.averageTipPerMeal = '0.00';
			vm.bill.mealCounter = 0;
		}
    }])
    .factory('dataService', function(){
    	var bill = {};

    	return {
    		get: function(){
    			return bill;
    		},
    		set: function(value){
    			bill = value;
    		}
    	}

    });
