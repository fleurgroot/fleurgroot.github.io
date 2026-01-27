console.log("JS file loaded");

// script that activates the play button of a video which is under an overlay

document.querySelectorAll('.videoContainer').forEach(wrapper => {
    const overlay = wrapper.querySelector('.videoOverlay');
    const iframe = wrapper.querySelector('iframe');
  
    overlay.addEventListener('click', () => {
      // Add autoplay to iframe URL
      const src = iframe.src;
      if (!src.includes('autoplay=1')) {
        iframe.src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
      }
  
      // Hide the overlay
      overlay.style.display = 'none';
    });
  })
