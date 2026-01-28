const translations = {
    fr: {
        birthdate: "Né le 02 février 2000",
        today: "à aujourd'hui",
        education: "FORMATION",
        "edu1-title": "Informaticien de gestion ES",
        "edu2-title": "Employé de commerce CFC",
        experience: "EXPÉRIENCES",
        "exp1-title": "Opérateur en production pharmaceutique",
        "exp2-title": "Opérateur en production chimique",
        skills: "APTITUDES PARTICULIÈRES",
        permits: "Permis",
        "permits-detail": "Charriot R1/R4 SUVA, voiture, camion 7.5 tonnes, autobus 16 personnes",
        business: "Création de site-simple.ch",
        "business-detail": "En 2025 : une entreprise de création de site web",
        hobbies: "PRINCIPAUX LOISIRS",
        hobby1: "Fitness",
        hobby2: "Jeux-vidéos",
        hobby3: "Parachutisme",
        hobby4: "Escalade"
    },
    de: {
        birthdate: "Geboren am 02. Februar 2000",
        today: "bis heute",
        education: "AUSBILDUNG",
        "edu1-title": "Informatiker Betriebswirtschaft HF",
        "edu2-title": "Kaufmann EFZ",
        experience: "BERUFSERFAHRUNG",
        "exp1-title": "Produktionsoperateur Pharma",
        "exp2-title": "Produktionsoperateur Chemie",
        skills: "BESONDERE FÄHIGKEITEN",
        permits: "Führerscheine",
        "permits-detail": "Gabelstapler R1/R4 SUVA, Auto, LKW 7.5 Tonnen, Bus 16 Personen",
        business: "Gründung von site-simple.ch",
        "business-detail": "Im Jahr 2025: ein Webdesign-Unternehmen",
        hobbies: "HAUPTINTERESSEN",
        hobby1: "Fitness",
        hobby2: "Videospiele",
        hobby3: "Fallschirmspringen",
        hobby4: "Klettern"
    }
};

let currentLang = 'fr';

function switchLang(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('btn-' + lang).classList.add('active');
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    // Activer le thème sombre pour l'allemand
    if (lang === 'de') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}
