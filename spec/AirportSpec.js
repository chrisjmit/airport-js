/*jshint strict:false*/

describe('Feature test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
  airport = new Airport();
  plane = new Plane();
  });
    it('planes can be instructed to land', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it ('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

});
