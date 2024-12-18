//Carousel Welcome

var copy = document.querySelector(".placard-content").cloneNode(true);
    document.querySelector(".placard").appendChild(copy);

//Caousel Feedback

document.getElementById("next").addEventListener("click", function() {
    const carousel = document.querySelector(".fb-content");
    const itemWidth = carousel.querySelector(".fb-comment").offsetWidth + parseInt(getComputedStyle(carousel).gap);
    const totalWidth = carousel.scrollWidth;
    const scrollPosition = carousel.scrollLeft;

    
    const itemsToScroll = window.innerWidth < 700 ? 1 : 2; 

    if (scrollPosition + itemWidth * itemsToScroll < totalWidth) {
        carousel.scrollBy({ left: itemWidth * itemsToScroll, behavior: 'smooth' });
    }
    updateArrowStates();
});

document.getElementById("prev").addEventListener("click", function() {
    const carousel = document.querySelector(".fb-content");
    const itemWidth = carousel.querySelector(".fb-comment").offsetWidth + parseInt(getComputedStyle(carousel).gap);
    const scrollPosition = carousel.scrollLeft;

    const itemsToScroll = window.innerWidth < 700 ? 1 : 2;

    if (scrollPosition > 0) {
        carousel.scrollBy({ left: -itemWidth * itemsToScroll, behavior: 'smooth' });
    }
    updateArrowStates();
});

function updateArrowStates() {
    const carousel = document.querySelector(".fb-content");
    const scrollPosition = carousel.scrollLeft;
    const itemWidth = carousel.querySelector(".fb-comment").offsetWidth + parseInt(getComputedStyle(carousel).gap);
    const totalWidth = carousel.scrollWidth;

    const itemsToScroll = window.innerWidth < 700 ? 1 : 2;

    if (scrollPosition + itemWidth * itemsToScroll >= totalWidth) {
        document.getElementById("next").classList.add("disabled");
    } else {
        document.getElementById("next").classList.remove("disabled");
    }
    if (scrollPosition === 0) {
        document.getElementById("prev").classList.add("disabled");
    } else {
        document.getElementById("prev").classList.remove("disabled");
    }
}

window.addEventListener("load", updateArrowStates);
document.querySelector(".fb-content").addEventListener("scroll", function() {
    updateArrowStates();
});

//Accordion FAQ

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const header = item.querySelector(".faq-header");
        const content = item.querySelector(".faq-ls-descp");

        header.addEventListener("click", () => {
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherContent = otherItem.querySelector(".faq-ls-descp");
                    otherItem.classList.remove("open");
                    otherContent.style.maxHeight = null; 
                }
            });

           
            if (item.classList.contains("open")) {
                item.classList.remove("open");
                content.style.maxHeight = null; // Fecha
            } else {
                item.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px"; 
            }
        });
    });
});

//Header Scroll

const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 0) {
        header.style.top = '0';
    } else {
        header.style.top = '-80px';
    }

    lastScrollY = currentScrollY; 
});

//Menu Mobile

document.addEventListener('DOMContentLoaded', function () {
    const btnMobile = document.getElementById('menu-mobile');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const btnWelcome = document.getElementById('menu-mobile-welcome');
    const body = document.body;

    btnMobile.addEventListener('click', function () {
        offScreenMenu.classList.toggle('active');
        body.classList.toggle('no-scroll'); 
    });

    btnWelcome.addEventListener('click', function () {
        offScreenMenu.classList.toggle('active');
        body.classList.toggle('no-scroll'); 
    });

    const closeButton = document.getElementById('btn-mobile');
    closeButton.addEventListener('click', function () {
        offScreenMenu.classList.remove('active'); 
        body.classList.remove('no-scroll'); 
    });

    const menuItems = document.querySelectorAll('.of-nav-menu');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            offScreenMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

});