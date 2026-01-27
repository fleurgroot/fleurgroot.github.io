console.log("JS file loaded");

// js that puts an underline under the name of the page the user is on

window.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const currentUrl = window.location.href;
  
    links.forEach(function (link) {
      if (link.href === currentUrl) {
        link.classList.add("current");
      }
    });
  });


// Script for one word changing every second in a nav li
const wordSpan = document.getElementById("rotating-word");

if (wordSpan) {
  const words = [
    { text: "cool", color: "#b3ebf2" },
    { text: "fun", color: "#f64a8a" },
    { text: "nice", color: "#ffff31" }
  ];
  
  let currentIndex = 0;

  function rotateWord() {
    wordSpan.textContent = words[currentIndex].text;
    wordSpan.style.color = words[currentIndex].color;
    
    currentIndex++;
    if (currentIndex === words.length) currentIndex = 0;
  }

  rotateWord(); // <-- immediately set the first word
  setInterval(rotateWord, 700);
}

 /* changes word every . 7seconds */


