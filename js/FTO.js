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


//Open Specializare
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });
});


