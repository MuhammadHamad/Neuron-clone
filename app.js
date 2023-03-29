let topRow = document.querySelector(".top-row");
let bottomRow = document.querySelector(".bottom-row");
let logo = document.querySelector(".logo-img");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 150) {
    bottomRow.classList.add("navScroll");
  } else {
    bottomRow.classList.remove("navScroll");
  }
});
