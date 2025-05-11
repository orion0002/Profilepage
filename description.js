// Optional: Add interactivity later if needed
console.log("Description Page Loaded");
document.addEventListener("DOMContentLoaded", function () {
  const starfield = document.getElementById("starfield");
  const numStars = 100;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (1 + Math.random() * 2) + "s";
    star.style.opacity = Math.random();

    starfield.appendChild(star);
  }
});
 document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("toggle-music");

  // Music control (user interaction needed)
  let musicStarted = false;

  // Event listener to start music after a click
  document.body.addEventListener("click", () => {
    if (!musicStarted) {
      audio.play();  // Start the music when user clicks anywhere
      audio.volume = 0;  // Initially mute the music
      let vol = 0;
      // Gradually increase the volume (fade-in effect)
      const fadeIn = setInterval(() => {
        if (vol < 0.4) {
          vol += 0.02;
          audio.volume = vol;
        } else {
          clearInterval(fadeIn);
        }
      }, 200);
      musicStarted = true;
      toggleBtn.textContent = "🔈 Pause Music";  // Update button text
    }
  });

  // Toggle music play/pause when button is clicked
  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      toggleBtn.textContent = "🔈 Pause Music";
    } else {
      audio.pause();
      toggleBtn.textContent = "🔇 Play Music";
    }
  });
});
