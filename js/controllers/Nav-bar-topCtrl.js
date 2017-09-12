app.controller('NavBarTopCtrl',['$scope', function ($scope) {

    $scope.currentNavItem = 'page1';

    $scope.goto = function(page) {
        console.log("Goto " + page);
    }

}]);