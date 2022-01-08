const navBtn = document.querySelector("#nav__btn");
const navLinks = document.querySelector(".nav__links");
const body = document.querySelector("body");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("is--hidden");
  navBtn.classList.toggle("is--btn-x");
  body.classList.toggle("is--overflow-hidden");
});
