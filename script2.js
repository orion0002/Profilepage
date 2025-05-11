console.log("Orion's profile page loaded!");
// Generate random stars
const starField = document.querySelector('.stars');

function generateStars(num) {
  for (let i = 0; i < num; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Set random position
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    // Set random size and delay for twinkling effect
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.animationDelay = `${Math.random() * 5}s`;

    starField.appendChild(star);
  }
}

// Generate 100 stars (you can adjust the number)
generateStars(100);
// Animate skill progress bars
document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(function(bar) {
    const progress = bar.getAttribute("data-progress");
    bar.querySelector("before").style.width = `${progress}%`;
  });
});
// Intersection Observer for skill progress bars animation
document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll(".progress-bar");

  // Create an intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'active' class when the progress bar comes into view
        entry.target.classList.add("active");
        // Stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Trigger the animation when 50% of the progress bar is in view
  });

  // Start observing each progress bar
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
});
// Personalized Greeting based on time of day
// Show greeting based on time of day
window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("greetingModal");
  const greetingMessage = document.getElementById("greetingMessage");
  const closeBtn = document.querySelector(".close-btn");

  const now = new Date();
  const hour = now.getHours();
  let greeting = "Welcome to profile page!";

  if (hour < 12) {
    greeting = "Good morning! Welcome to profile page!";
  } else if (hour < 18) {
    greeting = "Good afternoon! Welcome to profile page!";
  } else {
    greeting = "Good evening! Welcome to profile page!";
  }

  greetingMessage.textContent = greeting;
  modal.style.display = "block";

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
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

