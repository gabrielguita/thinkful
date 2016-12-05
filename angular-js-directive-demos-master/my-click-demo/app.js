angular.module('myApp', []).
	run(function($rootScope) {
		$rootScope.alert = function() {console.log("You've been alerted!")};
	}).
	directive('myClick', function() {
		return function($scope, element, attrs) {
            element.on('click', function() {
                $scope.$apply(function() {
                    // evaluate expression defined in on-click in HTML template
                    $scope.$eval(attrs.myClick);
                });
            });
        }
	});