let btn1=document.getElementsByClassName("add")[0];
let btn2=document.getElementsByClassName("remove")[0];
let btn3=document.getElementsByClassName("toggle")[0];

let box=document.querySelectorAll(".box")[0];

btn1.addEventListener("click",function(){
    box.classList.add("change")
})
btn2.addEventListener("click",function(){
    box.classList.remove("change")
});
btn3.addEventListener("click",function(){
    box.classList.toggle("change")
});
