
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
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
            controller : 'NewMealCtrl',
        	controllerAs: 'vm'
        }).when('/error', {
			template : '<p>Error - Page Not Found</p>'
		})
		.otherwise('/home');
    }])
    .controller('HomeCtrl', [function() {
        //console.log('dasda');
    }])
    .controller('NewMealCtrl', [function($scope) {
		var vm = this;

		vm.bill = {};
		
		vm.bill.subTotal = '0.00';
		vm.bill.tip = '0.00';
		vm.bill.total = '0.00';
		vm.bill.tipTotal = '0.00';
		vm.bill.averageTipPerMeal = '0.00';

	 	vm.bill.mealCounter = 0;

		vm.btnSubmit = function(mealCount, $scope){

			vm.bill.percentValue = (vm.bill.taxeRate / 100) * vm.bill.baseMealPrice;

			vm.bill.subTotal = vm.bill.percentValue + vm.bill.baseMealPrice;

			vm.bill.tip = (vm.bill.tipPergentage / 100) * vm.bill.subTotal;

			vm.bill.total = vm.bill.subTotal + vm.bill.tip;

			vm.bill.mealCounter += mealCount;

			vm.bill.tipTotal = vm.bill.tip * vm.bill.mealCounter;

			vm.bill.averageTipPerMeal = vm.bill.tipTotal / vm.bill.mealCounter;	 
			
			$scope.$broadcast('billValue', vm.bill);
		}

		vm.btnCancel = function () {
			vm.bill.baseMealPrice = '';
			vm.bill.taxeRate = ''
			vm.bill.tipPergentage = '';
		}
    }])
    .controller('MyEarningsCtrl', [function() {

		var vm = this;

		vm.bill = {};

		$scope.$on('billValue', function(event, data){
			vm.bill = data;
		})


    	vm.btnReset = function () {
			vm.bill.subTotal = '0.00';
			vm.bill.tip = '0.00';
			vm.bill.total = '0.00';
			vm.bill.tipTotal = '0.00';
			vm.bill.averageTipPerMeal = '0.00';
			vm.bill.mealCounter = 0;
		}
    }]);
