/*
* Author: Omar Lopez <omlopez@csumb.edu>
* Created 1 March 2022
* License: Public Domain
*/

$("#input-button").click(function(){
  var inputText = $("#input-text").val();
  $("#output").append("<p>" + inputText);
})
