/*jshint strict:false*/

function Plane() {

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};

}
