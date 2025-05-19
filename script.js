document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("feedback").textContent = "✅ Message sent successfully!";
  this.reset();
});
