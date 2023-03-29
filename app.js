let topRow = document.querySelector(".top-row");
let bottomRow = document.querySelector(".bottom-row");
let logo = document.querySelector(".logo-img");
// let sidebar = document.querySelector(".sidebar");
// let hamburger = document.getElementById("hamburger");
// let closeIcon = document.getElementById("close");
// let overlay = document.getElementById("overlay");
// let showNavbar = document.getElementById("show-navbar");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 150) {
    bottomRow.classList.add("navScroll");
  } else {
    bottomRow.classList.remove("navScroll");
  }
});

// hamburger.addEventListener("click", () => {
//   overlay.classList.add("overlay");
//   showNavbar.classList.add("show-navbar");
//   sidebar.style.display = "block";
//   sidebar.style.transform = "tranlateX(-800px)"
//   console.log("got clicked");
// });

// closeIcon.addEventListener("click", () => {
//   overlay.classList.remove("overlay");
//   showNavbar.classList.remove("show-navbar");
//   sidebar.style.display = "none";

// });





let toggle_bar = document.querySelector(".nav-header");
let sidebar = document.querySelector(".sidebar");

toggle_bar.addEventListener("click", function(){
    if(toggle_bar.firstElementChild.classList.contains("fa-bars"))
    {
        toggle_bar.firstElementChild.classList.replace("fa-bars","fa-times");
    }
    else
    {
        toggle_bar.firstElementChild.classList.replace("fa-times","fa-bars");
    }
   sidebar.classList.toggle("sidebaractive")
  })