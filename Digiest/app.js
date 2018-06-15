(function () {
    'use strict'; //
    angular.module('HelloApp', [])
        .controller('HelloController', HelloController);
        
        HelloController.$inject = ['$scope'];
        
        function HelloController($scope) {

            $scope.counter = 0 ;
            $scope.upCounter = function () {                
                $scope.counter++;
            }
        }
})();