(function () {
    'use strict';

    angular.module("HelloApp", [])
        .controller("HelloBigController", HelloBigController)        
        .factory("ShooplistFactory",ShooplistFactoryFn)
        //.directive('listItem',ListItem)
        .directive('wholeListItem',WholeListFn);

    function WholeListFn() {
        var ddo = {
            restrict:'AE', // restrict attribute and element 
            templateUrl: './listItemPage.html',
            scope: {
                items:'<',
                title: '@title'
              },
              controller: ShoppingListDirectiveController,
              controllerAs: 'list',
              bindToController: true
        };
        return ddo;
    }


    function ShoppingListDirectiveController(){
        var list = this;
        list.manogInlist = function (){

            for (var i = 0; i < list.items.length; i++) {
                var name = list.items[i].name;
                if (name.toLowerCase().indexOf("mango") !== -1) {
                    return true;
                }
            }

            return false; 
        };
    }





    // function ListItem() {
    //     var ddo = {
    //         template: '{{item.name}} And Quntities are {{item.quntity}}'
    //     };
    //     return ddo;
    // }

    HelloBigController.$inject = ['ShooplistFactory'];
    
//Controller 1
    function HelloBigController(ShooplistFactory) {
        var list = this;

        var origTilte = 'Shopping list # ';
        //bigctrl.title = origTilte + "("+ bigctrl.items.length + " items )";
        
        list.title = origTilte;
        // use factory to create a service 
        var ShooplistService = ShooplistFactory();
        list.items = ShooplistService.getItems();

        list.itemName = "";
        list.itemQunitity = "";

        list.addList = function () {
            ShooplistService.addList(list.itemName, list.itemQunitity);
            list.title = origTilte + "("+ list.items.length + "  items ) "; 
            console.log(list.title);    
                       
        }

        ShooplistService.removeItem = function(itemIndex){
            ShooplistService.removeItem(itemIndex);
            bigctrl.title = origTilte + "("+ bigctrl.items.length + " items ) ";
        }
    }
    
    // Factory Service implement
    function ShoppingListS(maxItems) {
        var service = this;
        var items = [];
        service.addList = function (itemName, itemQunitity) {
            if ((maxItems === undefined) ||
                (maxItems !== undefined) && (items.length < maxItems)) {
                var item = {
                    name:itemName,
                    quntity: itemQunitity
                };
                items.push(item);
            } else {
                throw new Error("Max Items (" + maxItems +   ") reached.");
            }
        };
        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
          };
        service.getItems = function () {
            return items;
          };
        
    }

    function ShooplistFactoryFn(){
        var factory = function(maxItems){
            return new ShoppingListS(maxItems);
        };
        return factory;
    }
})();