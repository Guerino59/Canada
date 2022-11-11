//Slider

const items = document.querySelectorAll(".slider img");
const nbSlide = items.length;
const suivant = document.querySelector(".btn-right");
const precedent = document.querySelector(".btn-left");
let count = 0;

//Modal Map

const modalContainer = document.querySelector(".modal-container");
const open = document.getElementById("open");
const close = document.getElementById("close");

//Anim site

const tSpans = document.querySelectorAll(".accroche span");
const btns = document.querySelectorAll(".btn-first");
const nav = document.querySelectorAll("nav li");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const logo = document.getElementById("logo");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(tSpans, 1, { top: 50, opacity: 0, ease: "power2.out" }, 0.3);
  TL.staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1");
  TL.from(l1, 1, { width: 0, ease_out: "power2.out" }, 0.6, "-=2");
  TL.from(l2, 1, { width: 0, ease: "power2.out" }, 0.6, "-=2");
  TL.staggerFrom(nav, 1, { opacity: 0, ease: "power2.out" }, 0.2, "-=3");

  TL.play();
});

open.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

function slideSuivante() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("active");
  console.log(count);
}
suivant.addEventListener("click", slideSuivante);

function slidePrecedente() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  items[count].classList.add("active");
  console.log(count);
}
precedent.addEventListener("click", slidePrecedente);

function keyPress(e) {
  if (e.keyCode === 37) {
    slidePrecedente();
  } else if (e.keyCode === 39) {
    slideSuivante();
  }
}
document.addEventListener("keydown", keyPress);
