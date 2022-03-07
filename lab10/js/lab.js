/*
* Author: Omar Lopez <omlopez@csumb.edu>
* Created 1 March 2022
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

var headEl = document.getElementById("headshot");
headEl.addEventListener("click", function(){
    var name = prompt("Your name, sir?");
    var title = document.getElementById('name');
    title.innerHTML = name;
});


document.writeln("Heres your new name: ",
  sortUsername(), "</br>")
