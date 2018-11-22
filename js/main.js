let atmega = document.querySelector(".atmega"),
    modalAtmega = document.querySelector(".modal-atmega"),
    btnClose = document.querySelectorAll(".close-btn");

    modalAtmega.style.display = "none";

    atmega.addEventListener('click', () => {
        modalAtmega.style.display = "block";
    });

    btnClose.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.style.display = "none";
        });
    });