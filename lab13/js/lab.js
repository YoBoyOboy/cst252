/*
* Author: Omar Lopez <omlopez@csumb.edu>
* Created 1 March 2022
* License: Public Domain
*/

function sortingHat(name) {
    // get length of name
    var len = name.length;
    // do a mod 4 to get house
    var mod = len % 4;
    // if conditional to set houseStr to house
    var houseStr;
    if (mod == 0) {
        houseStr = "Jedi";
    } else if (mod == 1) {
        houseStr = "Sith";
    } else if (mod == 2) {
        houseStr = "Mandalorian";
    }else if (mod == 3) {
        houseStr = "Gungan";
    }
    // return house txt
    return houseStr;
}

$("#my-button").click(function(){

  var name = $("#input").val()
  var house = sortingHat(name);
  console.log(house);
  $("#output").html("Your new faction is " + house);

});
var name = "Omar Anthony Lopez Jr";
var name = sortingHat(name);
console.log(house);
