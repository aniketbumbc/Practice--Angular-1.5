angular.module('F1FeederApp', ['controllerFeature',
    'serviceFeature',
    'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when("/drivers", {templateUrl: "./partials/drivers.html", controller: "driversController"}).
      when("/drivers/:id", {templateUrl: "./partials/driver.html", controller: "driverController"}).
      when("/test",{templateUrl:"./partials/test.html",controller:"driverController"}).
      otherwise({redirectTo: '/drivers'});
  }]);

