import { unsuccessful, successful, update, visits } from "../../config.js";

//Disable right mouse click Script
document.addEventListener("contextmenu", (event) => event.preventDefault());

// attack counter
const unsucc = document.querySelector(".unsuccessful");
const succ = document.querySelector(".successful");
const visit = document.querySelector(".visits");
const up = document.querySelector(".update");

unsucc.innerText = unsuccessful;
succ.innerText = successful;
// up.innerText = update;
visit.innerText = visits;
console.log(visit);
// end of attack counter

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
