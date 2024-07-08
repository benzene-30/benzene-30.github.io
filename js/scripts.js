

//Header
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const mobileNav = document.getElementById('mobile-nav');

    menuButton.addEventListener('click', function () {
        mobileNav.style.width = '100%';
    });

    closeButton.addEventListener('click', function () {
        mobileNav.style.width = '0%';
    });
});


// Mobile menu toggle
document.getElementById("menuButton").onclick = function () {
    document.getElementById("mobile-nav").style.width = "100%";
}

document.getElementById("closeButton").onclick = function () {
    document.getElementById("mobile-nav").style.width = "0";
}


// JavaScript to handle the mobile menu
document.getElementById('menuButton').addEventListener('click', function () {
    document.getElementById('mobile-nav').style.width = '100%';
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('mobile-nav').style.width = '0';
});



//Slides
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let reviewIndex = 0;
let reviews = document.getElementsByClassName("review-slide");

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function autoSlideShow() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(autoSlideShow, 100000); // Change slide every 9 seconds
}

function autoReviewSlideShow() {
    let i;
    for (i = 0; i < reviews.length; i++) {
        reviews[i].classList.remove('active-review');
    }
    reviewIndex++;
    if (reviewIndex > reviews.length) { reviewIndex = 1 }
    reviews[reviewIndex - 1].classList.add('active-review');
    setTimeout(autoReviewSlideShow, 100000); // Change review every 9 seconds
}


// Initial call to display the first slide and review
showSlides(slideIndex);
autoSlideShow();
autoReviewSlideShow();


// Get all slides for the REVIEWS section
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0; //Keeps track of the slide that is being displayed
    const slides = document.querySelectorAll(".review-slide");  //creates a NodeList

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active-review", "incoming", "outgoing"); // Remove all classes

            if (i === index) {
                slide.classList.add("incoming");
                setTimeout(() => {
                    slide.classList.add("active-review");
                    slide.classList.remove("incoming");
                }, 1000); // Wait for the slide-in animation to complete
            } else if (i === currentSlide) {
                slide.classList.add("outgoing");
                setTimeout(() => {
                    slide.classList.remove("active-review", "outgoing");
                }, 1000); // Wait for the slide-out animation to complete
            }
        });

        currentSlide = index;
    }

    function nextSlide() {
        let nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 6000); // Change the slide every 6 seconds
});
