(function () {
    'use strict';

    angular.module("HelloApp", [])
        .controller("HelloBigController", HelloBigController)
        .controller("HelloSmallController", HelloSmallController)
        .service('ShooplistService', ShooplistService);

    HelloBigController.$inject = ['ShooplistService'];
    HelloSmallController.$inject = ['ShooplistService'];

    function HelloBigController(ShooplistService) {
        var bigctrl = this;
        bigctrl.newItemName = "";
        bigctrl.newItemQunitity = "";
        bigctrl.addList = function () {
            ShooplistService.addList(bigctrl.newItemName, bigctrl.newItemQunitity);
           // console.log("list add" + bigctrl.newItemName+ " and " +bigctrl.newItemQunitity);
             
        }
        
    }

    function HelloSmallController(ShooplistService) {
        var smallctrl = this;
       // console.log("Get List item",ShooplistService.getItems());
        smallctrl.items = ShooplistService.getItems(); 
        smallctrl.removeItems = function (itemIndex){
            ShooplistService.removeItem(itemIndex);
        };

    }

    function ShooplistService() {
        var service = this;
        var items = [];
        service.addList = function(newItemName, newItemQunitity) {
            var item = {
                name: newItemName,
                quntity: newItemQunitity
            };
            items.push(item);
        };
        service.getItems = function () {
            return items;
          };
        service.removeItem = function (itemIndex) {
            items.pop(itemIndex,1);
          };

    }

})();