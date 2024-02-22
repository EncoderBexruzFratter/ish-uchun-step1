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

let search = document.querySelector(".search-btn")
let search_inp =document.querySelector(".search-inp")
search.addEventListener("click" , function(){
  search_inp.style.left = "0"
})

let text = document.querySelectorAll("h1")

search_inp.addEventListener('input' , function(){
    text.forEach(function(item , index){
        if(item.textContent.toLocaleLowerCase().indexOf(input.value.toLocaleLowerCase()) > -1){
            item.style.display = "flex"
        }else{
            item.style.display = "none"
        }
    })  
})