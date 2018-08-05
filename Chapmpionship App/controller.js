angular.module('controllerFeature', [])
    .controller('driversController', function ($scope, ergastAPIservice) {
        $scope.name = "List Of Drivers";
        $scope.nameFilter = null;
        $scope.driversList = [];

        $scope.searchFilter = function (driver) {
            debugger;
            var keyword = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
        }

        ergastAPIservice.getDrivers().success(function (response) {
            debugger;
            $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });

    }).
controller('driverController', function ($scope, $routeParams,ergastAPIservice) {
    $scope.id = $routeParams.id;  // to access URL ID 
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races;
    });
});

console.log("Test");


