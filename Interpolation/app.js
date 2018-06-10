(function () {
    'use strict';
    angular.module("Myapp", []).controller("Mycontroller", Myfunction);

    Myfunction.$inject = ['$scope'];
    function Myfunction($scope) {
        $scope.name = "Bunny Eats";
        //$scope.needFood = '';
        // $scope.noNeedFood =  'NoFood';
        $scope.noFeedMe = function () {
            alert("Not this time");
            $scope.needFood = 'NoFood';
        };
        $scope.feedMe = function () {
            alert("Yeesss");
            $scope.needFood = 'NeedFood';
        };
    }
 
})();