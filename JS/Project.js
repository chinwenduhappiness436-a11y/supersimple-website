const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

    const scrollRevealElements = document.querySelectorAll(
        ".projects-intro, .projects-heading, .project-card, .project-video, .projects-cta, footer .footer-content"
    );
    const scrollZoomElements = document.querySelectorAll(".project-card:nth-child(even)");

    scrollZoomElements.forEach((element) => {
        element.classList.add("scroll-zoom");
    });

    if ("IntersectionObserver" in window) {
        const scrollRevealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    scrollRevealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        scrollRevealElements.forEach((element) => {
            element.classList.add("scroll-reveal");
            scrollRevealObserver.observe(element);
        });
    } else {
        scrollRevealElements.forEach((element) => {
            element.classList.add("scroll-reveal", "is-visible");
        });
    }