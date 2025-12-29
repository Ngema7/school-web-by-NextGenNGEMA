/*function showSidebar() {
    document.getElementById("sidebar").style.display = "flex";
}

function hideSidebar() {
    document.getElementById("sidebar").style.display = "none";
}*/
function showSidebar() {
    document.getElementById("sidebar").classList.add("show");
}
function hideSidebar() {
    document.getElementById("sidebar").classList.remove("show");
}


/*img slider*/
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

function showSlide(i) {
    index = i;
    if (index >= total) index = 0;
    if (index < 0) index = total - 1;
    slides.style.transform = `translateX(${-index * 600}px)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Auto Slide
setInterval(() => {
    nextSlide();
}, 3000); 



















/*============navbar==============*/

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeBtn = document.getElementById("closeBtn");
const themeToggle = document.getElementById("themeToggle");

// Open sidebar
hamburger.addEventListener("click", () => {
  sidebar.classList.add("show");
  hamburgerIcon.className = "fa-solid fa-xmark";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  hamburgerIcon.className = "fa-solid fa-bars";
});

// Close on link click
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show");
    hamburgerIcon.className = "fa-solid fa-bars";
  });
});

// Dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

