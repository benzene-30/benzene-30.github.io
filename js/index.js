//Menu
// JavaScript to handle menu toggling
document.getElementById('menuButton').onclick = function () {
    document.getElementById('mobile-nav').style.width = "100%";
}
document.getElementById('closeButton').onclick = function () {
    document.getElementById('mobile-nav').style.width = "0%";
}

function closeMenu() {
    document.getElementById('mobile-nav').style.width = "0%";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('#mobile-nav .overlay-content a').forEach(function (link) {
    link.addEventListener('click', function () {
        closeMenu(); // Closes the mobile menu when a link is clicked
    });
});




// Get all slides for the HERO section
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0; //Keeps track of the slide that is being displayed
    const slides = document.querySelectorAll(".slide");  //creates a NodeList

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active"); // It ensures that the active class is removed from the previous slide before the function adds it to the current slide.
            if (i === index) {
                slide.classList.add("active"); // Adds the active class to the next slides making it visible
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Changes the slide every 5 seconds
});


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
