/*jshint strict:false*/

describe('Airport',function(){
  var airport;
  airport = new Airport();
  it ("has no planes by default", function(){
    expect(airport.planes()).toEqual([]);
  });
});
