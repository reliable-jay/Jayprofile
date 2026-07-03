const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});
// --- Close Nav-Bar on Clicking off Menu Button --
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
//--- Clear form after successful submission ---

const form = document.getElementById("contact-form");

form.addEventListener("submit", () => {
  setTimeout(() => {
    form.reset();
  }, 3000);
});
