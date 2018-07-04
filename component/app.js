(function () {
'use strict';

angular.module('ShoppingListComponentApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
.component('shoppingList',{
  templateUrl: 'shoppingList.html',
  controller: ShoppingListComponentController,
  bindings:{
    items:'<',
    myTitle:'@title',
    onRemove:'&'
  }
});

function ShoppingListComponentController() {
  var $ctrl = this;
 
  $ctrl.cookiesInList = function () {
    for (var i = 0; i < $ctrl.items.length; i++) {
      var name = $ctrl.items[i].name;
      if (name.toLowerCase().indexOf("mango") !== -1) {
        return true;
      }
    }
    return false;
  };


  $ctrl.Remove = function(myIndex){
    //reference function
    $ctrl.onRemove({index:myIndex});
  };
}


ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var viewList = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  viewList.items = shoppingList.getItems();
  var origTitle = "Shopping List #1";
 viewList.warn = "Ohh no Mangoooooss";
  viewList.title = origTitle + " (" + viewList.items.length + " items )";

  viewList.itemName = "";
  viewList.itemQuantity = "";

  viewList.addItem = function () {
    shoppingList.addItem(viewList.itemName, viewList.itemQuantity);    
    viewList.title = origTitle + " (" + viewList.items.length + " items )";
   
  };

  viewList.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    this.lastRemoved = this.items[itemIndex].name + " Remove form List ";
    shoppingList.removeItem(itemIndex);
    this.title = origTitle + " (" + viewList.items.length + " items )";
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, itemQuantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
