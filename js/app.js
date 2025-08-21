const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
    hamburger.innerHTML = "☰"; // menu icon
  } else {
    mobileMenu.style.display = "flex";
    hamburger.innerHTML = "✖"; // close icon
  }
});
