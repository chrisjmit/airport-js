/*jshint strict:false*/

describe('Feature test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
  var airport = new Airport();
  var plane = new Plane();
  });
  it('planes can be instructed to land', function(){
  plane.land(airport);
  expect(airport.planes()).toContain(plane);
});

});
