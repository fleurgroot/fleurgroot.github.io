console.log("JS file loaded");

// script that makes the CV image larger

const wrapper = document.querySelector('.cvWrapper');
const img = document.querySelector('.zoomableCV');

img.addEventListener('click', () => {
  wrapper.classList.toggle('zoomed');
});
