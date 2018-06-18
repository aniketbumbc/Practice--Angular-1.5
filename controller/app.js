(function (){
    'use strict';
angular.module("HelloApp",[])
.controller("ParentCtr",ParentCtr)
.controller("ChildCtr",ChildCtr);

ParentCtr.$inject = ['$scope'];
ChildCtr.$inject = ['$scope'];

function ParentCtr() {
    var parent = this;
    parent.value = 50;
  }

function ChildCtr($scope){
var child = this;
child.value = 100;
console.log("Yahooo See Scope", $scope);
}

})();