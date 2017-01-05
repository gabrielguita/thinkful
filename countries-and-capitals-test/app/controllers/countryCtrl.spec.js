
describe("factorial()", function() {
	var scope, $location, controller;

	beforeEach(module('countriesApp'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = function(){
			return $controller('CountryCtrl', { '$scope': scope})
		}
	}));

    it("should perform a factorial on numbers between 1..5", function() {
    	var c = controller();
    	console.log(c);
    });

});