'use strict';

angular.module('amHeatmapApp')
    .controller('MainCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.heatmap = {
            max: 10,
            cols: 200,
            rows: 400,
            data: [{
                x: 100,
                y: 220,
                count: 7
            }, {
                x: 11,
                y: 226,
                count: 10
            }, {
                x: 200,
                y: 333,
                count: 8
            }, {
                x: 33,
                y: 223,
                count: 6
            }, {
                x: 100,
                y: 22,
                count: 5
            }, {
                x: 111,
                y: 444,
                count: 8
            }, {
                x: 555,
                y: 45,
                count: 6
            }, {
                x: 100,
                y: 25,
                count: 5
            }]
        }
    });