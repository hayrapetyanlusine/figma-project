
const menu = document.getElementById("menu");
const menuCover = document.querySelector(".menu-cover");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close");

// menu 
menu.addEventListener("click", () => {
    menuCover.classList.add("open");
    mobileMenu.classList.add("open");

    document.body.style.overflowY = "hidden";
});

close.addEventListener("click", () => {
    menuCover.classList.remove("open");
    mobileMenu.classList.remove("open");

    document.body.style.overflowY = "auto";
});


// header slider
const dots = document.querySelectorAll(".dots img");
const headerSliderOne = document.querySelector(".slider-border");
const headerSliderTwo = document.querySelector(".header-slider-img-two");
const secondText = document.querySelector(".second-content-text");

function headerSliderChange () {
    headerSliderOne.classList.add("active");
    dots[0].src = `./images/btn-1.png`;

    dots[0].addEventListener("click", () => {
        dots[1].src = `./images/btn-2.png`;
        dots[0].src = `./images/btn-1.png`;

        headerSliderOne.classList.add("active");
        headerSliderTwo.classList.remove("active");
        secondText.classList.remove("active");
    });

    dots[1].addEventListener("click", () => {
        dots[0].src = `./images/btn-2.png`;
        dots[1].src = `./images/btn-1.png`;

        headerSliderTwo.classList.add("active");
        secondText.classList.add("active");
        headerSliderOne.classList.remove("active");
    });
}

headerSliderChange();


// main slider
const sliderImages = document.querySelectorAll(".slider-images .slider-images-item");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

function changeCarousel () {
    let index = 0; 

    sliderImages[0].classList.add("active");

    leftBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
        }
        else {
            index = sliderImages.length - 1;
        }
        
        refreshCarousel();
    });

    rightBtn.addEventListener("click", () => {
        if (index < sliderImages.length - 1) {
            index++;
        }
        else {
            index = 0;
        }

        refreshCarousel();
    });

    function refreshCarousel() {
        for (let i = 0; i < sliderImages.length; i++) {
            if (i == index) {
                sliderImages[i].classList.add("active");
            }
            else {
                sliderImages[i].classList.remove("active");
            }
        }
    }
}

changeCarousel();