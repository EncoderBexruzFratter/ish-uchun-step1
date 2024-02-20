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
let hamburger = document.querySelectorAll(".hamburger-btn")
let hidden = document.querySelectorAll(".hiddem-navbar")
let bgDel = document.querySelectorAll(".bg-del")
hamburger.forEach(function(item , index){
  item.addEventListener('click' , function(){
    bgDel.forEach(function(bg , index){
      bg.style.left = "100%"
     })
     hidden.forEach(function(hidden_item , index){
       hidden_item.style.left = "0"
     })
   })
 })
 bgDel.forEach(function(bg , index){
  bg.addEventListener('click' , function(){
    hidden.forEach(function(hidden_item , index){
      hidden_item.style.left = "-65%"
      bg.style.left = "-100%"
    })
  })
 })

 let see_als = document.querySelector(".popular-link")
 let see_box = document.querySelector(".popular-logo-box")

 see_als.addEventListener('click' , function(){
  see_box.classList.toggle("h-665   ")
 })