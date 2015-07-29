var app = angular.module('directivePractice', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'app/HomeTmpl.html',
        controller: 'mainController'
    })
    .otherwise({
        redirectTo: '/home'
    });
});
