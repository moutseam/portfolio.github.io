// ====== Navbar Active Link on Scroll + Mobile Toggle ======
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// ====== Toggle mobile menu ======
menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x"); // change icon to X
};

// Close menu when link is clicked
navLinks.forEach(link =>
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  })
);
const BOT_TOKEN = "YOUR_BOT_TOKEN"; // ពី BotFather
const CHAT_ID = "YOUR_CHAT_ID"; // ពី get_id_bot

