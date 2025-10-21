// ============ SCROLL ANIMATION ============
const animatedItems = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
animatedItems.forEach((item) => observer.observe(item));

// ============ NAVBAR EFFECT ============
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============ FORM VALIDATION ============
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();
      if (!name || !email || !msg) {
        alert("Please fill in all fields!");
        return;
      }
      alert("Thank you, your message has been sent successfully!");
      form.reset();
    });
  }
});
