(function(){
    'use strict';

    var shoppinglist = ["abc","apr","nice","bottle","Bag","Ball"];
    var shoppinglistObj = [
        {
            name: "Baseball",
            quntity: 300
        },
        {
            name: "Bat",
            quntity: 152
        },
        {
            name: "Gloves",
            quntity: 200
        },
        {
            name: "Swimming Kit",
            quntity: 358
        },
        {
            name: "Shuttlecokc",
            quntity: 55
        },
    ];

angular.module("HelloApp",[]).controller("HelloController",HelloController);

HelloController.$inject = ['$scope'];

function HelloController($scope) { 
    $scope.shoppinglist1 = shoppinglist;
    $scope.listObj = shoppinglistObj;
 }
})();