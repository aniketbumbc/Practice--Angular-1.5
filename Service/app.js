(function () {
    'use strict';

    angular.module("HelloApp", [])
        .controller("HelloBigController", HelloBigController)
        .controller("HelloSmallController", HelloSmallController)
        .service('ShooplistService', ShooplistService);

    HelloBigController.$inject = ['$scope', 'ShooplistService'];
    HelloSmallController.$inject = ['$scope','ShooplistService'];

    function HelloBigController(ShooplistService) {
        var itemAdder = this;
        itemAdder.newItemName = "";
        itemAdder.newItemQunitity = "";
        itemAdder.addList = function () {
            ShooplistService.addList(itemAdder.newItemName, itemAdder.newItemQunitity);
            console.log(addList());
        }
    }

    function HelloSmallController(ShooplistService) {
        var showList = this;
        //showList.items = ShooplistService.getItems();     

    }

    function ShooplistService() {
        var service = this;
        var items = [];
        service.addList = function (newItemName, newItemQunitity) {
            var item = {
                name: newItemName,
                quntity: newItemQunitity
            };
            items.push(item);
        };
        service.getItems = function () {
            return items;
          };
    }

})();