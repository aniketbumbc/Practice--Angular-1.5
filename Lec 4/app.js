(function () {
    'use strict'; //
    angular.module('HelloApp', [])
        .controller('HelloController', function ($scope) {

            $scope.name = "Aniket Bhavsar";
            $scope.sayHello = function () {
                return "Hello From Function";
            }
        });
})();