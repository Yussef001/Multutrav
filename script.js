document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Bouton "Remonter en haut"
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block'; // Afficher le bouton après un défilement
    } else {
        backToTop.style.display = 'none'; // Cacher le bouton si on est en haut
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Remonter en douceur
});

// Fonction pour détecter la section visible et marquer l'onglet actif
function updateActiveNav() {
    const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections
    const navLinks = document.querySelectorAll('.nav-link'); // Sélectionne tous les liens de navigation

    let index = sections.length;

    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
    
    // Supprime la classe active de tous les liens
    navLinks.forEach((link) => link.classList.remove('active'));

    // Ajoute la classe active au lien correspondant
    navLinks[index].classList.add('active');
}

// Écoute les événements de scroll pour mettre à jour les liens
window.addEventListener('scroll', updateActiveNav);

// Appelle la fonction au chargement pour définir l'état initial
updateActiveNav();

// Sélecteur de langue
const languageSelector = document.getElementById("languageSelector");

// Fonction pour changer la langue
function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // Utilise innerHTML pour conserver les balises HTML
        }
    });
    document.documentElement.lang = lang; // Met à jour l'attribut lang du HTML
}

// Écouteur d'événements pour le changement de langue
languageSelector.addEventListener("change", (e) => {
    changeLanguage(e.target.value);
});

// Charger la langue par défaut au chargement de la page
window.addEventListener("DOMContentLoaded", () => {
    changeLanguage(languageSelector.value);
});
