var app = angular.module('myApp', []);

app.directive('yoYo', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="yo-yo">Yo <span ng-transclude></span>!</div>',
        replace: true
    }
});