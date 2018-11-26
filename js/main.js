'use strict';
document.addEventListener("DOMContentLoaded", () =>{

    let atmega = document.querySelector(".atmega"),
        analog = document.querySelector(".analog"),
        digital = document.querySelector(".digital"),
        pwm = document.querySelector(".pwm"),
        serial = document.querySelector(".serial"),
        power = document.querySelector(".power"),
        modalAtmega = document.querySelector(".modal-atmega"),
        modalAnalog = document.querySelector(".modal-analog"),
        modalDigital = document.querySelector(".modal-digital"),
        modalPwm = document.querySelector(".modal-pwm"),
        modalSerial = document.querySelector(".modal-serial"),
        modalPower = document.querySelector(".modal-power"),
        btnClose = document.querySelectorAll(".close-btn");

        modalAtmega.style.display = "none";
        modalAnalog.style.display = "none";
        modalDigital.style.display = "none";
        modalPwm.style.display = "none";
        modalSerial.style.display = "none";
        modalPower.style.display = "none";

    atmega.addEventListener('click', () => {
        modalAtmega.style.display = "block";
    });
    analog.addEventListener('click', () => {
        modalAnalog.style.display = "block";
    });
    digital.addEventListener('click', () => {
        modalDigital.style.display = "block";
    });
    pwm.addEventListener('click', () => {
        modalPwm.style.display = "block";
    });
    serial.addEventListener('click', () => {
        modalSerial.style.display = "block";
    });
    power.addEventListener('click', () => {
        modalPower.style.display = "block";
    });
    btnClose.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.style.display = "none";
        });
    });

});