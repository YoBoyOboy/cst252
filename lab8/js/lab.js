/*
* Author: Omar Lopez <omlopez@csumb.edu>
* Created 22 Febuary 2022
* License: Public Domain
*/

function funName(x){
  return (x +2);
}

// test functions
console.log("Whats 2+2? ", funName(2));
console.log("Whats 8+2? ", funName(8));

var array = [80, 20, 45, 7, 100, 86, 9]
console.log("The array contains: ", array);

var result = array.map(funName);
console.log("The array plus 2 is:", result);

var result = array.map(function(x){
  return x * 2
})
console.log("The array doubled is: ", result);
//Output
//document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
//document.writeln("My Main Ride: <pre>",
  //JSON.stringify(myMainRide, null, '\t'), "</pre>");
