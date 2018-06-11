(function () {
    'use strict';
    angular.module("Myapp", []).controller("Mycontroller", Myfunction);

    Myfunction.$inject = ['$scope','$filter'];
    function Myfunction($scope,$filter) {
        $scope.name = "Bunny Eats";
        $scope.bunCost = 43;
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

        $scope.Yahoomsg = function () {
            var msg = "i love cookies";
            var outmsg = $filter('uppercase')(msg);
            return outmsg;
          }
    }
 
})();