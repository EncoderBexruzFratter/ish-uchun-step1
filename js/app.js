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
// let btn3 = document.querySelector("#btn1")
// let btn4 = document.querySelector("#btn2")
// btn3.addEventListener("click" , function(){
//     btn3.style.height = "186px"
//     btn4.style.height = "50px"
// })
// btn4.addEventListener("click" , function(){
//     btn4.style.height = "186px"
//     btn3.style.height = "50px"
// })
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let right = document.querySelector("#right");
let left = document.querySelector("#left");

month.addEventListener("click", function () {
  month.classList.add("prices-btn-active");
  year.classList.remove("prices-btn-active");
  left.style.left = "0";
  right.style.right = "-1525px";
});
year.addEventListener("click", function () {
  year.classList.add("prices-btn-active");
  month.classList.remove("prices-btn-active");
  left.style.left = "-1525px";
  right.style.right = "0";
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
  
  