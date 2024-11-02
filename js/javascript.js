function updateTitles() {
    const ervaringTitle = document.querySelector('.ervaring-titel');
    const hobbyTitle = document.querySelector('.hobby-titel');

    // Update ervaring titel
    if (ervaringTitle) { // Controleer of de element bestaat
        if (window.innerWidth < 991) {
            ervaringTitle.innerHTML = 'ERVARING';
        } else {
            ervaringTitle.innerHTML = "E<br>R<br>V<br>A<br>R<br>I<br>N<br>G";
        }
    }

    // Update hobby titel
    if (hobbyTitle) { // Controleer of de element bestaat
        if (window.innerWidth < 991) {
            hobbyTitle.innerHTML = "HOBBY's";
        } else {
            hobbyTitle.innerHTML = "H<br>O<br>B<br>B<br>Y<br>'s";
        }
    }
}

// Voeg event listeners toe voor vensterresizing en laden
window.addEventListener('resize', updateTitles);
window.addEventListener('load', updateTitles); // Voor de eerste keer laden


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    // Controleer de velden en toon foutmeldingen indien nodig
    form.addEventListener("submit", function(event) {
        if (!name.checkValidity()) {
            name.setCustomValidity("Gelieve je naam en voornaam in te vullen.");
        } else {
            name.setCustomValidity("");
        }

        if (!email.checkValidity()) {
            email.setCustomValidity("Vul een geldig e-mailadres in.");
        } else {
            email.setCustomValidity("");
        }

        if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity();
        }
    });

    // Reset foutmeldingen bij nieuwe input
    name.addEventListener("input", function() {
        name.setCustomValidity("");
    });

    email.addEventListener("input", function() {
        email.setCustomValidity("");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach((carousel) => {
        const carouselSlide = carousel.querySelector('.carousel-slide');
        const images = carousel.querySelectorAll('.carousel-image');
        const nextBtn = carousel.querySelector('.carousel-next');
        const prevBtn = carousel.querySelector('.carousel-prev');
        
        let currentIndex = 0;
        let imageWidth = images[0].clientWidth;

        // Functie om de huidige afbeelding te tonen
        function showSlide(index) {
            carouselSlide.style.transform = `translateX(${-index * imageWidth}px)`;
        }

        // Functie om de afbeelding breedte opnieuw te berekenen bij schermgrootte verandering
        function updateImageWidth() {
            imageWidth = images[0].clientWidth;
            showSlide(currentIndex); // Herstel de positie na het aanpassen van de breedte
        }

        // Event listeners voor knoppen
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        });

        // Automatische carrousel (elke 5 seconden)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }, 5000);

        // Aanroep updateImageWidth bij venstergrootte verandering
        window.addEventListener('resize', updateImageWidth);

        // Initialiseer eerste slide
        showSlide(currentIndex);
    });
});

$(document).ready(function() {
    console.log("jQuery is working");
    $('[data-toggle="collapse"]').on('click', function() {
        console.log("Hamburger clicked");
    });
});

