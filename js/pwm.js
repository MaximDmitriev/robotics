'use strict';

document.addEventListener("DOMContentLoaded", () =>{

    let pwmScale = document.querySelector("#pwmInput"),
        pwmTxt = document.querySelector("label"),
        pwmHigh = document.querySelectorAll(".pwm-high"),
        pwmLow = document.querySelectorAll(".pwm-low"),
        wheel = document.querySelector(".wheel"),
        triger = false;

        let control = setInterval(() => {
            wheel.style.transform = "rotate(720deg)";
            wheel.style.transition = `${4000 - pwmScale.value * 30}ms`;
            setTimeout(() => {
                wheel.style.transition = 0 + "s";
                wheel.style.transform = "rotate(0deg)";
            }, (2000 - pwmScale.value * 10));
            
        }, (2000 - pwmScale.value * 10 + 10));

    pwmScale.addEventListener('input', () =>{
        
        clearInterval(control);

        pwmTxt.textContent = pwmScale.value * 2.5 | 0;
        pwmHigh.forEach((item) => {
            item.style.width = pwmScale.value + 'px';
        });
        pwmLow.forEach((item) => {
            item.style.width = 100 - pwmScale.value + 'px';
        });
        
        // wheel.style.transform = "rotate(720deg)";
        // wheel.style.transition = `${4000 - pwmScale.value * 30}ms`;
        // setTimeout(() => {
        //     wheel.style.transition = 0 + "s";
        //     wheel.style.transform = "rotate(0deg)";
        // }, (2000 - pwmScale.value * 10));
        
        control = setInterval(() => {
        wheel.style.transform = "rotate(720deg)";
        wheel.style.transition = `${4000 - pwmScale.value * 30}ms`;
        setTimeout(() => {
            wheel.style.transition = 0 + "s";
            wheel.style.transform = "rotate(0deg)";
        }, (2000 - pwmScale.value * 10));
        
    }, (2000 - pwmScale.value * 10 + 10));


    });




});