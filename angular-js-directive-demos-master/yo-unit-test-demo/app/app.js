angular.module('myApp', [])
	.directive('yoYo', function(){
		return {
			restrict: 'E',
			template: '<p>Yo <span ng-transclude></span>!</p>',
			transclude: true
		}
	})