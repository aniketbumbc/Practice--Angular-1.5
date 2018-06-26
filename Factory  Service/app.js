(function () {
    'use strict';

    angular.module("HelloApp", [])
        .controller("HelloBigController", HelloBigController)
        .controller("HelloSmallController", HelloSmallController)
        .factory("ShooplistFactory",ShooplistFactoryFn)
        .directive('listItem',ListItem)
        .directive('wholeListItem',WholeListFn);

    function WholeListFn() {
        var ddo = {
            templateUrl: './listItemPage.html'
        };
        return ddo;
    }
    function ListItem() {
        var ddo = {
            template: '{{item.name}} And Quntities are {{item.quntity}}'
        };
        return ddo;
    }

    HelloBigController.$inject = ['ShooplistFactory'];
    HelloSmallController.$inject = ['ShooplistFactory'];
//Controller 1
    function HelloBigController(ShooplistFactory) {
        var bigctrl = this;

        // use factory to create a service 
        var ShooplistService = ShooplistFactory();
        bigctrl.items = ShooplistService.getItems();

        bigctrl.newItemName = "";
        bigctrl.newItemQunitity = "";

        bigctrl.addList = function () {
            ShooplistService.addList(bigctrl.newItemName, bigctrl.newItemQunitity);                    
        }

        ShooplistService.removeItem = function(itemIndex){
            ShooplistService.removeItem(itemIndex);
        }
    }

    function HelloSmallController(ShooplistFactory) {
        var smallctrl = this;

        var ShooplistService = ShooplistFactory(3);    
         
        smallctrl.items = ShooplistService.getItems();

        smallctrl.newItemName = "";
        smallctrl.newItemQunitity = "";

        smallctrl.addList = function () {
            try{
                ShooplistService.addList(smallctrl.newItemName,smallctrl.newItemQunitity);
            }catch(error){
                    smallctrl.errorMessage = error.message;
            }                           
        }
        smallctrl.removeItems = function (itemIndex){
            ShooplistService.removeItem(itemIndex);
        };
    }

    // Factory Service implement
    function ShoppingListS(maxItems) {
        var service = this;
        var items = [];
        service.addList = function (newItemName, newItemQunitity) {
            if ((maxItems === undefined) ||
                (maxItems !== undefined) && (items.length < maxItems)) {
                var item = {
                    name: newItemName,
                    quntity: newItemQunitity
                };
                items.push(item);
            } else {
                throw new Error("Max Items (" + maxItems +   ") reached.");
            }
        }
        service.getItems = function () {
            return items;
          };
        service.removeItem = function (itemIndex) {
            items.pop(itemIndex,1);
          };
    }

    function ShooplistFactoryFn(){
        var factory = function(maxItems){
            return new ShoppingListS(maxItems);
        };
        return factory;
    }
})();