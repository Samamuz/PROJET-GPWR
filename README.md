# 💼 CV en Ligne - Samuel BARMAN

## 📖 Description du projet

Ce projet est un **CV en ligne** développé en HTML, CSS et JavaScript pur (sans framework). Il a été réalisé dans le cadre du cours de Base de Données et présente mon parcours professionnel de manière interactive et responsive.

## 🔗 Liens

- **🌐 Site en ligne** : https://samamuz.github.io/cv-online/
- **📦 Dépôt GitHub** : https://github.com/Samamuz/cv-online

## 🏗️ Structure du projet

```
cv-online/
├── index.html          # Page principale du CV
├── README.md           # Documentation du projet
├── .gitignore          # Fichiers à exclure de Git
├── css/
│   └── style.css       # Feuille de styles avec dark mode
├── img/
│   └── photo.webp      # Photo de profil
└── js/
    └── script.js       # Fonctionnalité JavaScript
```

## ⚙️ Fonctionnalité JavaScript

### Switch de langue FR/DE avec traductions dynamiques

**Description :**  
Un système de changement de langue permet de basculer entre le français et l'allemand en temps réel. Les boutons FR/DE dans le coin supérieur droit permettent de changer instantanément toutes les sections du CV.

**Implémentation technique :**
- **Event Listener** `click` : Détecte le clic sur les boutons de langue
- **Dictionnaire de traductions** : Stocke toutes les traductions dans un objet JavaScript
- **DOM Manipulation** : Met à jour dynamiquement le contenu avec `data-translate` attributes
- **LocalStorage** : Sauvegarde la préférence de langue de l'utilisateur

**Code principal (js/script.js) :**
```javascript
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    
    // Mise à jour de tous les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });
    
    // Mise à jour des boutons actifs
    updateActiveButton(lang);
}
```

### Mode sombre/clair (bonus)

Le CV dispose également d'un système de thème automatique qui s'adapte aux préférences système de l'utilisateur via `prefers-color-scheme`.

## 🔄 Workflow Git utilisé

Ce projet suit le **GitFlow simplifié** enseigné en cours :

### Branches principales
- **`main`** : Branche de production (code stable et déployé)
- **`develop`** : Branche d'intégration (regroupe les features avant livraison)

### Branches de fonctionnalités
Chaque fonctionnalité a été développée dans une branche dédiée `feature/<nom>` :

1. **`feature/gitignore`** : Configuration du fichier .gitignore
2. **`feature/structure-html`** : Structure HTML de base + arborescence des dossiers
3. **`feature/style-css`** : Styles CSS et design responsive avec dark mode
4. **`feature/javascript-interactif`** : Switch de langue FR/DE avec traductions dynamiques
5. **`feature/image-profil`** : Ajout et intégration de la photo de profil
6. **`feature/readme-documentation`** : Documentation complète du projet

### Processus de développement

```
1. Créer une branche depuis develop :
   git checkout -b feature/nom-feature

2. Développer la fonctionnalité avec des commits clairs

3. Pousser la branche sur GitHub :
   git push -u origin feature/nom-feature

4. Créer une Pull Request vers develop

5. Merger la PR après vérification

6. Livraison en production :
   - Pull Request develop → main
   - Création d'un tag de version (v1.0.0)
```

### Règles strictes appliquées
- ❌ **Aucun commit direct** sur `main` ou `develop`
- ✅ **Toutes les modifications** passent par des Pull Requests
- ✅ **Messages de commit** descriptifs et clairs
- ✅ **Un tag de version** pour chaque release

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique du contenu
- **CSS3** : Design responsive avec Flexbox et Grid, dark mode
- **JavaScript (ES6)** : Interactivité sans bibliothèque externe
- **Git** : Gestion de version avec GitFlow
- **GitHub Pages** : Hébergement du site statique

## 🌍 Fonctionnalités principales

- ✅ CV bilingue (Français/Allemand)
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Mode sombre/clair automatique
- ✅ Animation et transitions fluides
- ✅ Photo de profil optimisée (format WebP)
- ✅ Typographie professionnelle (Google Fonts)

## 📱 Responsive Design

Le site est **100% responsive** et s'adapte à tous les écrans :
- 🖥️ Desktop (> 768px)
- 📱 Tablette (768px - 480px)
- 📱 Mobile (< 480px)

## 🚀 Déploiement

Le site est déployé automatiquement via **GitHub Pages** depuis la branche `main`.

**URL du site :** https://samamuz.github.io/cv-online/

## 📊 Statistiques Git

- **Branches créées** : 6 branches `feature/`
- **Pull Requests** : 6 PRs mergées vers develop + 1 release vers main
- **Commits** : 9 commits au total
- **Tag de version** : `v1.0.0`

## 👤 Auteur

**Samuel BARMAN**  
- GitHub : [@Samamuz](https://github.com/Samamuz)
- Email : pro.samuelbarman@gmail.com
- Adresse : Rue de Sainte-Beuve 6, 1006 Lausanne
- Téléphone : 079 718 78 65

## 🎓 Formation

- **2025 - Aujourd'hui** : Informaticien de gestion ES, ETML École Supérieure, Lausanne
- **2016 - 2019** : Employé de commerce CFC, ABC Maritime, Nyon

## 📄 Licence

Ce projet est un projet académique réalisé dans le cadre du cours de Base de Données à l'ETML.

---

**Projet réalisé avec ❤️ en respectant les bonnes pratiques Git et GitFlow**