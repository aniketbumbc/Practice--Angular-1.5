(function () {
    'use strict';

    angular.module("HelloApp", [])
        .controller("MenuList", MenuList)
        .service('MenuListService', MenuListService)
        .constant('ApiBasePath',"http://davids-restaurant.herokuapp.com");



    //Controller 1
    MenuList.$inject = ['MenuListService','$scope'];

    function MenuList(MenuListService, $scope) {
        var menulist = this;
        $scope.information;
        var promise = MenuListService.getMenu();

        promise.then(function (response) {
            menulist.items = response.data;
            console.log(menulist.items);
        }).catch(function (error) {
            console.log("Something wrong");
        });

        menulist.logMenuItems = function (shortName) {
            var promise = MenuListService.getMenuCategory(shortName);

            promise.then(function (response) {
                console.log(response.data);
                $scope.information = response.data.category.name;
            }).catch(function (error) {
                console.log(error);
            })
        };
    }

    MenuListService.$inject = ['$http','ApiBasePath'];

    function MenuListService($http,ApiBasePath) {
        var service = this;

        service.getMenu = function () {
            var response = $http({
                method: "GET",
                url: ApiBasePath + "/categories.json"
            });
            return response;
        }
    
    service.getMenuCategory = function (shortName) {
        var response = $http({
            method: "GET",
            url: ApiBasePath + "/menu_items.json",
            params: {
                category: shortName
            }
        });
        return response;
    };
    }

})();