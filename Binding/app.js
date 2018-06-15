(function(){
    'use strict';
    angular.module('HelloApp', [])
    .controller('HelloController', HelloController);
   
    HelloController.$inject = ['$scope'];
    function HelloController($scope){
        $scope.name = "Bunny";
        //$scope.userName = " ";
        $scope.setFullName = function (){
            $scope.fullName =  $scope.name + " " + "Yahoo";
        }
    }
})();