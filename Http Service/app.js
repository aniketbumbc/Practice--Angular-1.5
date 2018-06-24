(function () {
    'use strict';

    angular.module("HelloApp", [])
        .controller("MenuList", MenuList)
        .service('MenuListService', MenuListService);
        


    //Controller 1
    MenuList.$inject = ['MenuListService'];

    function MenuList(MenuListService) {
        var menulist = this;
        var promise = MenuListService.getMenu();

        promise.then(function (response) {
            menulist.items = response.data;
            console.log( menulist.items);
        }).catch(function (error) {
            console.log("Something wrong");
        });
    }

    MenuListService.$inject = ['$http'];

    function MenuListService($http){
        var service = this;

        service.getMenu = function(){
            var response = $http({
            method:"GET",
            url:("http://davids-restaurant.herokuapp.com/categories.json")
            });
            return response;
        }
    }    
})();