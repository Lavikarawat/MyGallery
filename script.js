document.addEventListener("DOMContentLoaded", () => {
    const artworks = document.querySelectorAll('.artwork');
    let current = 0;

    const showArtwork = (index) => {
        artworks.forEach((art, i) => {
            art.classList.toggle('active', i === index);
        });
    };

    document.getElementById('nextBtn').addEventListener('click', () => {
        current = (current + 1) % artworks.length;
        showArtwork(current);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        current = (current - 1 + artworks.length) % artworks.length;
        showArtwork(current);
    });

    // Zoom toggle
    artworks.forEach((art) => {
        art.addEventListener('click', () => {
            art.classList.toggle('zoom');
        });
    });

    // Initial display
    showArtwork(current);
});


// popup

const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');
const closeBtn = document.getElementById('closePopup');

document.querySelectorAll('.artwork').forEach((art) => {
    art.addEventListener('dblclick', () => {
        const info = art.getAttribute("data-info");
        popupText.textContent = info;
        popup.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});


// music

const music = new Audio("music.mp3");
music.loop = true;
music.volume = 0.3;

const toggleBtn = document.getElementById("musicToggle");
let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = "🔇 Music";
  } else {
    music.play();
    toggleBtn.textContent = "🔊 Music";
  }
  isPlaying = !isPlaying;
});

// autoplay on first interaction
document.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().then(() => {
      isPlaying = true;
      toggleBtn.textContent = "🔊 Music";
    }).catch(() => {
      // autoplay blocked
    });
  }
}, { once: true });
