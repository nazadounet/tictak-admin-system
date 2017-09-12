var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ui.bootstrap']);

app.constant('_', window._);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/test', {
            templateUrl: 'partials/page1Test.html'
        })
        .when('/test2', {
            templateUrl: 'partials/page2Test.html'
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