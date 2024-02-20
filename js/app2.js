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