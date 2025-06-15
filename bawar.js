g// Typed animation
var typed = new Typed("#typed", {
  Strings: ["Full-stack Web Developer", "Database Developer", ""],
  typeSpeed: 50,
  backSpeed: 20,
  backdelay: 3000,
  showCursor: false,
  loop: true,
});

// theme

function theme() {
  const darkBtn = document.getElementById("darkBtn");
  const lightBtn = document.getElementById("lightBtn");

  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    darkBtn.style.display = "block";
    lightBtn.style.display = "none";
  } else {
    darkBtn.style.display = "none";
    lightBtn.style.display = "block";
  }
}
