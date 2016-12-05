var app = angular.module('myApp', []);

app.directive('yoYo', function() {
	return {
		templateUrl: 'yo-template.html',
		restrict: 'AE',
	}
});
