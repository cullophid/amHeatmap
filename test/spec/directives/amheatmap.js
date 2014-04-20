'use strict';

describe('Directive: amHeatmap', function () {

  // load the directive's module
  beforeEach(module('amHeatmapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<am-heatmap></am-heatmap>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the amHeatmap directive');
  }));
});
