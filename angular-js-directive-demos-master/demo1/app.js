var app = angular.module('myApp', []);

app.directive('yoYo', function() {
    return {
        restrict: 'E',
        template: '<div class="yo-yo">Yo!</div>',
    }
})