var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ui.bootstrap']);

app.constant('_', window._);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/driverSection.html'
        })
        .when('/users', {
            templateUrl: 'partials/userSection.html'
        })
        .when('/test3', {
            templateUrl: 'partials/page3Test.html'
        })

        .otherwise({redirectTo: '/'});
}]);

// use in views, ex : ng-repeat="x in _.range(3)"
app.run(function ($rootScope) {
    $rootScope._ = window._;
});