// Correct password
const correctPassword = "25-04-2000";

// Elements
const loginPage = document.getElementById("loginPage");
const mainPage = document.getElementById("mainPage");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");

const surpriseBtn = document.getElementById("surpriseBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

// Login function
function login() {
  const password = passwordInput.value.trim();

  if (password === correctPassword) {
    loginPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
    createConfettiHearts();
  } else {
    errorMsg.textContent = "❌ Wrong password. Try again!";
    passwordInput.value = "";
  }
}

// Button login
loginBtn.addEventListener("click", login);

// Enter key login
passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    login();
  }
});

// Countdown to Sanjay's birthday
function updateCountdown() {
  const birthdayDate = new Date("April 25, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = `
      <h2 class="birthday-live">🎉 It's Sanjay's Birthday Today! 🎉</h2>
    `;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Surprise modal
surpriseBtn.addEventListener("click", function() {
  modal.classList.remove("hidden");
  createConfettiHearts();
});

closeModal.addEventListener("click", function() {
  modal.classList.add("hidden");
});

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

// Music button
let musicPlaying = false;

musicBtn.addEventListener("click", function() {
  if (!musicPlaying) {
    bgMusic.play().catch(() => {
      alert("Add an MP3 file source in index.html to play music.");
    });
    musicBtn.textContent = "⏸ Pause";
    musicPlaying = true;
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Music";
    musicPlaying = false;
  }
});

// Floating hearts animation
function createConfettiHearts() {
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = ["❤️", "🎉", "✨", "🎈", "🎂"][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 18 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}

// Continuous small celebration effect
setInterval(() => {
  if (!mainPage.classList.contains("hidden")) {
    createSmallHeart();
  }
}, 900);

function createSmallHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "✨";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = "18px";
  heart.style.animationDuration = "4s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4500);
}