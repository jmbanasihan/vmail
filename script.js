// Variables
let flip = document.querySelector(".flip");
let letter = document.querySelector(".letter");
let toggleBtn = document.querySelector("#toggle");
let allContainer = document.querySelector(".all_container");
let hearts = document.querySelector(".hearts");
let area = document.querySelector(".area");
let loopWrapper = document.querySelector(".loop-wrapper");
let stampOpen = document.querySelector(".stamp-text-open");
let stampClose = document.querySelector(".stamp-text-close");

// Initially hide all_container, hearts, and area
allContainer.style.display = "none";
hearts.style.display = "none";
area.style.display = "none";

// Zoom out to 150%
setTimeout(function () {
  loopWrapper.style.transform = "scale(1.2)";
}, 1000);

// Show all_container and area after 10 seconds
setTimeout(function () {
  allContainer.style.display = "block";
  area.style.display = "block";
  loopWrapper.style.display = "none";
  stampOpen.style.display = "flex";
  stampClose.style.display = "none";

  // Zoom in to 150%
  area.style.transform = "scale(1.8)";

  // Zoom out to 100%
  setTimeout(function () {
    area.style.transform = "scale(1)";
  }, 500);
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
      stampClose.style.display = "none";
      stampOpen.style.display = "flex";
      letter.style.zIndex = "5";
      stamp.style.display = "flex";
    }, 300);
  } else {
    // Open envelope
    flip.classList.remove("close");
    hearts.style.display = "block"; // Show hearts when opening envelope
    loopWrapper.style.display = "none"; // Hide loop_wrapper when opening envelope

    setTimeout(function () {
      flip.classList.add("open");
      stampOpen.style.display = "none"; // Change text when envelope is open
      stampClose.style.display = "flex"; // Change text  when envelope is close
      letter.classList.add("letterOpen");
      letter.style.zIndex = "7";
    }, 100);
  }
}
