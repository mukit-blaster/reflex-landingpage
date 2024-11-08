// Redirect to the login page
document.getElementById("login-btn").addEventListener("click", function () {
  window.location.href = "./login page/login.html";
});

// Redirect to the signnup page
document.getElementById("signup-btn").addEventListener("click", function () {
  window.location.href = "./signup page/signup.html";
});

// Redirect to the audio therapy page
document.getElementById("audio-therapy").addEventListener("click", function () {
  window.location.href = "./music player/music.html";
});

// Redirect to the appointment page
document.getElementById("exploreBtn").addEventListener("click", function () {
  window.location.href = "./appointment booking/booking.html";
});

// Redirect to the yoga page
document.getElementById("yoga-therapy").addEventListener("click", function () {
  window.location.href = "./yoga therapy/yoga.html";
});

// Redirect to the reading therapy page
document
  .getElementById("reading-therapy")
  .addEventListener("click", function () {
    window.location.href = "./reading therapy/reading.html";
  });

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
