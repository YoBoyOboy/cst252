/*
* Author: Omar Lopez <omlopez@csumb.edu>
* Created 1 March 2022
* License: Public Domain
*/

var bioEl = $(".biography")
$(".biography").append("<button id=my-button>I dont know");
$("#my-button").click(function(){alert("Alert!");})
$("#my-button").click(function(){$(".assignments").toggleClass("green");})
