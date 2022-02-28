/*
* Author: Omar Lopez <omlopez@csumb.edu>
* Created 22 Febuary 2022
* License: Public Domain
*/

function sortUsername() {
  var userName = window.prompt("Give me your name *finger gun*");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArraySort =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

document.writeln("Heres your new name: ",
  sortUsername(), "</br>")
//Output
//document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
//document.writeln("My Main Ride: <pre>",
  //JSON.stringify(myMainRide, null, '\t'), "</pre>");
