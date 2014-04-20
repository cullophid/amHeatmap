'use strict';

angular
    .module('amHeatmapApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'amHeatmap',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });