let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
btn1.addEventListener("click" , function(){
    btn1.style.height = "186px"
    btn2.style.height = "50px" 
})
btn2.addEventListener("click" , function(){
    btn2.style.height = "186px" 
    btn1.style.height = "50px" 
})
let month = document.querySelector("#month")
let year = document.querySelector("#year")
let right = document.querySelector("#right")
let left = document.querySelector("#left")

month.addEventListener('click' , function(){
    month.classList.add("prices-btn-active")
    year.classList.remove("prices-btn-active")
    left.style.left = "0"
    right.style.right = "-1525px"
})
year.addEventListener('click' , function(){
    year.classList.add("prices-btn-active")
    month.classList.remove("prices-btn-active")
    left.style.left = "-1525px"
    right.style.right = "0"
})