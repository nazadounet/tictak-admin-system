app.controller('DriverSectionCtrl', ['$scope', '$interval', 'GetDataFromApiFactory', function($scope, $interval, GetDataFromApiFactory){
/*******************************LOADER SECTION********************************************/
    $scope.searchDriverLoader = false;
        var self = this;

        self.activated = true;
        self.determinateValue = 30;

        // Iterate every 100ms, non-stop and increment
        // the Determinate loader.
        $interval(function() {

            self.determinateValue += 1;
            if (self.determinateValue > 100) {
                self.determinateValue = 30;
            }

        }, 100);
/*******************************LOADER SECTION********************************************/

/*******************************SEARCH TO API SECTION********************************************/
    //will store the search from the "driverIdOrEmail" input from driverSection.html
    $scope.search = {};

    $scope.getDriverProfil = function () {
        if($scope.search.driverIdOrMail){
            $scope.searchDriverLoader = true;
            GetDataFromApiFactory.getDriverProfil($scope.search.driverIdOrMail)
                .then(function (response) {
                    console.log(response)
            }, function (err) {
                console.log(err)
            });
        }else{
            console.log('recois rien');
        }
        $scope.searchDriverLoader = false;
    };
/*******************************SEARCH TO API SECTION********************************************/
}]);
