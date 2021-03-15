document.querySelector(".menu-boton").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");

});


ScrollReveal().reveal(".container", {delay : 500});
ScrollReveal().reveal(".menu-boton", {delay : 500});
ScrollReveal().reveal("nav-menu-right", {delay : 200});
ScrollReveal().reveal(".showcase", {delay : 250});
ScrollReveal().reveal(".news-cards", {delay : 250});
ScrollReveal().reveal(".catalogo-principal", {delay : 250});
ScrollReveal().reveal(".cards-banner-one", {delay : 250});
ScrollReveal().reveal(".cards-banner-two", {delay : 250});
ScrollReveal().reveal(".social", {delay : 250});
ScrollReveal().reveal(".footer", { delay: 250 });

