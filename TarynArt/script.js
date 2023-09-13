document.getElementById("mobile-menu-button").addEventListener("click", function () {
    var mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
    } else {
        mobileMenu.classList.add("active");
    }
});