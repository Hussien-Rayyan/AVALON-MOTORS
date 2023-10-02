// Aside 
let Toggler =document.querySelector(".toggle");
let aside =document.querySelector(".aside nav");
let close =document.querySelector(".close");
// Add Class Open 
Toggler.onclick = function () {
    aside.classList.add("open");
};
// Remove Class Open 
close.onclick = function () {
    this.parentElement.classList.remove("open");
};
document.onkeyup = function (k) {
    if(k.key === "Escape") {
        aside.classList.remove("open");
    }
};
// Img Changer
let img = document.querySelector('.bg');
let view_car = document.querySelector('.view_car');
function cars(car) {
    img.src = car ;
}
function colors (color) {
    view_car.style.background = color ;
}
//--Type Writer--//
let myText ="Welcome To Avalon Motors";
i =0;
'use strict';
let typeWriter= setInterval (function (){
    document.getElementById ('type' ).textContent +=myText[i];
    i+= 1;
    if(i > myText.length - 1 ){
        clearInterval (typeWriter)
    }
} , 150);