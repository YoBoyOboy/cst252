/*
* Author: Omar Lopez <omlopez@csumb.edu>
* Created 16 Febuary 2022
* License: Public Domain
*/

//Deine Variables
var myTransport = ["car", "bus", "bike"];

var myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Silver",
  year: 2018,
  age: function()
    {return 2022 - age}
};

//Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
