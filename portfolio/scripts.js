document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language_toggle");
    const texts = {
        es: {
            home: "Hola, soy",
            position: "Desarrollador Full-Stack.",
            description: "Siempre buscando nuevas formas de crear experiencias de usuario fluidas y significativas.",
            aboutMeTitle: "Sobre Mí",
            aboutMeText: "Aquí puedes escribir información sobre ti, tu experiencia y habilidades.",
            projectTitle: "Proyectos",
            projectTexts: "Aquí mostrarás tus proyectos con enlaces y descriptiones.",
            contactTitle: "Contacto",
            contactText: "Deja tu información de contacto o formulario.",
            navHome: "Inicio",
            navAboutMe: "Sobre Mí",
            navProjects: "Proyectos",
            navContact: "Contacto"
        },
        en: {
            home: "Hello, I'm",
            position: "Full-Stack Developer.",
            description: "Always looking for new ways to build smooth and meaningful user experiences.",
            aboutMeTitle: "About Me",
            aboutMeText: "Here you can write information about yourself, your experience, and skills.",
            projectTitle: "Projects",
            projectTexts: "Here you will showcase your projects with links and descriptions.",
            contactTitle: "Contact",
            contactText: "Leave your contact information or form.",
            navHome: "Home",
            navAboutMe: "About Me",
            navProjects: "Projects",
            navContact: "Contact"
        }
    };

    function toggleLanguage() {
        let currentLang = languageToggle.textContent.trim();
        let newLang = currentLang === "ES" ? "EN" : "ES";
        languageToggle.textContent = newLang;
        
        let selectedTexts = newLang === "ES" ? texts.es : texts.en;
        document.querySelectorAll("[data-lang]").forEach(element => {
            let key = element.getAttribute("data-lang");
            if (selectedTexts[key]) {
                element.textContent = selectedTexts[key];
            }
        });
        
        document.querySelector("nav ul li:nth-child(1) a").textContent = selectedTexts.navHome;
        document.querySelector("nav ul li:nth-child(2) a").textContent = selectedTexts.navAboutMe;
        document.querySelector("nav ul li:nth-child(3) a").textContent = selectedTexts.navProjects;
        document.querySelector("nav ul li:nth-child(4) a").textContent = selectedTexts.navContact;
    }

    languageToggle.addEventListener("click", toggleLanguage);

    const menuToggle = document.querySelector(".menu_toggle");
    const navMenu = document.querySelector("nav ul");
    const menuLinks = document.querySelectorAll("nav ul li a");

   
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });


    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });
});
