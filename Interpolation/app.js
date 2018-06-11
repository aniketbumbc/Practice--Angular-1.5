(function () {
    'use strict';
    angular.module("Myapp", []).controller("Mycontroller", Myfunction).filter("loves",LoveFilter);

    Myfunction.$inject = ['$scope','$filter','lovesFilter'];
    function Myfunction($scope,$filter,lovesFilter) {
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

          $scope.sayMessage = function(){
              var saymsg = " I love to eat burger which is best food";
              return saymsg;
          }
          $scope.sayLoveMessage = function(){
            var saymsg = " I love to eat burger which is best food";
            saymsg = lovesFilter(saymsg);
            return saymsg;
        }
    }

    // factory Filter 
    function LoveFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("best", "worst");
            return input;
        };
    } 
})();