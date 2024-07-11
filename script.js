// Variables
let flip = document.querySelector(".flip");
let letter = document.querySelector(".letter");
let toggleBtn = document.querySelector("#toggle");
let allContainer = document.querySelector(".all_container");
let hearts = document.querySelector(".hearts");
let area = document.querySelector(".area");
let loopWrapper = document.querySelector(".loop-wrapper");

// Initially hide all_container, hearts, and area
allContainer.style.display = "none";
hearts.style.display = "none";
area.style.display = "none";

// Show all_container and area after 10 seconds
setTimeout(function () {
  allContainer.style.display = "block";
  area.style.display = "block";
  loopWrapper.style.display = "none";
}, 7000);

// EventListener
toggleBtn.addEventListener("click", toggleEnvelope);

// Toggle function
function toggleEnvelope() {
  loopWrapper.style.display = "none";
  if (flip.classList.contains("open")) {
    // Close envelope
    loopWrapper.style.display = "none";
    flip.classList.remove("open");
    letter.classList.remove("letterOpen");
    hearts.style.display = "none"; // Hide hearts when closing envelope
    setTimeout(function () {
      flip.classList.add("close");
      letter.style.zIndex = "5";
    }, 300);
  } else {
    // Open envelope
    flip.classList.remove("close");
    hearts.style.display = "block"; // Show hearts when opening envelope
    loopWrapper.style.display = "none"; // Hide loop_wrapper when opening envelope
    setTimeout(function () {
      flip.classList.add("open");
      letter.classList.add("letterOpen");
      letter.style.zIndex = "7";
    }, 100);
  }
}
