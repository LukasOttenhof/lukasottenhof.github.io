document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    

    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

  

    // Add event listener to close the menu when clicking outside of it or on a link
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
            mobileMenu.classList.remove("active");
        }
    });

    // Select all links inside the mobile menu
    const mobileMenuLinks = mobileMenu.querySelectorAll("a.menu-link");

    // Add event listeners to close the menu when clicking a link
    mobileMenuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    });
});