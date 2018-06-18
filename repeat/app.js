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

    var numberstd = [10,15,1,5,3,98,4,3,10,98,54,66,];

    function above10(value) {
        return value > 10;
    }
    var filterarray = numberstd.filter(above10);
    console.log(filterarray);

angular.module("HelloApp",[]).controller("HelloController",HelloController);

HelloController.$inject = ['$scope'];

function HelloController($scope) { 
    $scope.shoppinglist1 = shoppinglist;
    $scope.listObj = shoppinglistObj;

    $scope.addList = function () {
        var newItem = {
            name : $scope.newItemName,
            quntity : $scope.newItemQunitity,
        };
        $scope.listObj.push(newItem);
    };
}
})();