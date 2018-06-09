(function () {
    'use strict';

    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', function ($scope) {
            $scope.name = " ";
            $scope.totalValue = 0;
            $scope.displayNo = function () {
                var totalNameValue = calculateString($scope.name); //get total value
                $scope.totalValue = totalNameValue;
            };
            function calculateString(string) {
                var totalStringValue = 0;
                for (var i = 0; i < string.length; i++) {
                    totalStringValue += string.charCodeAt(i);
                }
                return totalStringValue;
            }
        });
})();