
// (function () {

//     'use strict';
//     angular.module('DIApp', []).
//         controller('DIController', DIController);

//     DIController.$inject = ['$scope', '$filter'];    
//     function DIController($scope, $filter) {
//         $scope.userName = "bunnny";
//         $scope.upper = function () {
//             var upCase = $filter('uppercase');
//             $scope.userName = upCase($scope.userName);
//         };
//     }
// })();

!function(){"use strict";function e(e,n){e.userName="bunnny",e.upper=function(){var r=n("uppercase");e.userName=r(e.userName)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();




//!function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(e,r){e.userName="bunnny",e.upper=function(){var n=r("uppercase");e.userName=n(e.userName)}}])}();