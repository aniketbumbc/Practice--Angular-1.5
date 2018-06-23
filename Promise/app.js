(function () {
    'use strict';

    angular.module("HelloApp", [])
        .controller("ShoppingList", ShoppingListFn)
       .service('ShoppingListService',ShoppingListService)
       .service('WeightLossService',WeightLossService)



//Controller 1
    ShoppingListFn.$inject = ['ShoppingListService'];
    function ShoppingListFn(ShoppingListServiceFn) {
        var shoplist = this;

        // use factory to create a service 
        
        shoplist.items = ShoppingListServiceFn.getItems();

        shoplist.newItemName = "";
        shoplist.newItemQunitity = "";

        shoplist.addList = function () {
            ShoppingListServiceFn.addList(shoplist.newItemName, shoplist.newItemQunitity);                    
        }

        ShoppingListServiceFn.removeItem = function(itemIndex){
            ShoppingListServiceFn.removeItem(itemIndex);
        }
    }

    
    
    ShoppingListService.$inject = ['$q','WeightLossService'];

    function ShoppingListService($q,WeightLossService) {
        var service = this;
        var items = [];
        // service.addList = function (newItemName, newItemQunitity) {
            
        //     var promise = WeightLossService.checkName(newItemName);

        //     promise.then(function (respones){
        //         var nextPromise = WeightLossService.checkQuantity(newItemQunitity);

        //         nextPromise.then(function(result){
        //             var item = {
        //                 name: newItemName,
        //                 quntity: newItemQunitity
        //             };
        //             items.push(item);
        //         },function(errorResponse){
        //             console.log(errorResponse.message);
        //         });
        //     },function(errorResponse){
        //         console.log(errorResponse.message);
        //     });           
        // };

        service.addList = function (newItemName, newItemQunitity) {
            var promise = WeightLossService.checkName(newItemName);

            promise
            .then(function (response) {
                return WeightLossService.checkQuantity(newItemQunitity);
            })
            .then(function (response) {
                var item = {
                    name: newItemName,
                    quntity: newItemQunitity
                };
                items.push(item);
            })
            .catch(function (errorResponse) {
                console.log(errorResponse.message);
            });
        };
        service.getItems = function () {
            return items;
          };
        service.removeItem = function (itemIndex) {
            items.pop(itemIndex,1);
          };
    }

    WeightLossService.$inject = ['$q','$timeout']
    function WeightLossService($q,$timeout){
        var service = this;

        service.checkName = function(name){
            var deferred = $q.defer();
            var result = {
                message : ""
            }
      

        $timeout(function () {
            // check for mangos
            if(name.toLowerCase().indexOf('mango')=== -1){
                deferred.resolve(result);
            }else{
                result.message = " Stay away from Mangos Which is not good for health";
                deferred.reject(result);
            }
          },2000);
          return deferred.promise;
        };
    

    service.checkQuantity = function(quntity){
        var deferred = $q.defer();
        var result = {
            message :" "
        }
    

    $timeout(function () {
        // check for mangos
        if(quntity < 5){
            deferred.resolve(result);
        }else{
            result.message = " to much quntity";
            deferred.reject(result);
        }
      },1000);
      return deferred.promise;
    };  
}     
})();