let btns2 = document.querySelectorAll(".questions-btn");
let texts2 = document.querySelectorAll(".questions-box-text");
let img = document.querySelectorAll(".questions-img")
btns2.forEach(function (item, index) {
    item.addEventListener("click", function () {
        img.forEach(function(img , index){
            img.classList.remove("rotate")
        })
        texts2.forEach(function (element, elementindex) {
            element.classList.remove("active2");
        });
        texts2[index].classList.add("active2");
        img[index].classList.add("rotate")
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

 let see_als = document.querySelector(".popular-link")
 let see_box = document.querySelector(".popular-logo-box")
 see_als.addEventListener('click' , function(){
  see_box.classList.toggle("h-665")
 })