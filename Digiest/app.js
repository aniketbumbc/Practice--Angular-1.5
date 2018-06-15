(function () {
    'use strict'; //
    angular.module('HelloApp', [])
        .controller('HelloController', HelloController);

    HelloController.$inject = ['$scope','$timeout'];

    function HelloController($scope,$timeout) {
        $scope.counter = 0;
        $scope.upCounter = function () {
            $timeout(function(){
                $scope.counter++;
                console.log("counter up");
            },2000);
            
        }        // 
        //     setTimeout(function () {
        //         $scope.counter++;
        //         console.log("counter up");
        //         $scope.$digest();
        //     }, 2000);
        //
        // setTimeout(function () { 
        //     $scope.$apply(function(){
        //         $scope.counter++;
        //         console.log("counter up");
        //     });
        //  },2000); 
    }
})();