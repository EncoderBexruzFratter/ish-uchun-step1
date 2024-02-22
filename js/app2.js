let btns = document.querySelectorAll(".vision-btn");
let texts = document.querySelectorAll(".vision-btn-text");

btns.forEach(function (item, index) {
    item.addEventListener("click", function () {
        texts.forEach(function (element, elementindex) {
            element.classList.remove("active");
        });
        texts[index].classList.add("active");
    });
});

let hamburger = document.querySelector(".hamburger-btn");
let hidden = document.querySelector(".hiddem-navbar");
let bgDel = document.querySelector(".bg-del");
let x_btn = document.querySelector(".x_btn");
hamburger.addEventListener("click", function () {
  bgDel.style.left = "100%";
  hidden.style.left = "0";
});
x_btn.addEventListener("click", function () {
  hidden.style.left = "-65%";
  bgDel.style.left = "-100%";
});
bgDel.addEventListener("click", function () {
  hidden.style.left = "-65%";
  bgDel.style.left = "-100%";
});