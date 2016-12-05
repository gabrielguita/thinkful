describe('yoYo', function() {
	
	var scope,
		element,
		compiled,
		html,
		someone;

	beforeEach(module("myApp"));
	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		someone = 'Willis';
		html = "<yo-yo>" + someone + "</yo-yo>";
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}));
	it('should render element and say yo to someone', function(){
		expect(element.text()).toContain('Yo');
		expect(element.text()).toContain(someone);
	})

});