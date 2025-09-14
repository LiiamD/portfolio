const tabLinks = document.querySelectorAll(".tab-links");

const skillLink = document.getElementById("skill-link");
const expLink = document.getElementById("exp-link");
const educLink = document.getElementById("educ-link");

const divContent = document.getElementById("div-content");

const moreBtn = document.getElementById("more-btn");
const moreWork = document.getElementById("more-work");

const moreProj = document.getElementById("more-project");
const moreProjBtn = document.getElementById("more-proj-btn");

// side menu responsive

const sideMenu = document.getElementById("side-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const linkWork = { 
  projects: [
  {
    name: "PokéDex",
    img: "images/dev/pokedex.png",
    type: "Application de recherche de Pokémon par nom ou ID qui affiche leurs informations (images, types, bases, stats) en utilisant le proxy PokéAPI. ",
    url: "https://codepen.io/LiiamD/full/raObxGv",
  },
  {
    name: "Palindrome Checker",
    img: "images/dev/palindrome_checker.png",
    type: "Mini-application qui vérifie si une chaîne de caractères (string) est un palindrome (ex : « kayak). Manipulation de chaîne de caractères (.replace(), .toLowerCase(), etc), utilisation de regex (regular expression) et logique conditionnelle.",
    url: "https://codepen.io/LiiamD/full/zxvXrWJ",
  },
  {
    name: "react calculator",
    img: "images/dev/react_calculator.png",
    type: "Calculatrice qui permet d’additionner, de soustraire, de multiplier et de diviser des nombres entiers et décimaux. Gestion de l’état avec React et d’une logique de calcul. ",
    url: "https://codepen.io/LiiamD/full/bNNYgoM",
  }
  ],
  portfolio: [
  {
    name: "Skweek",
    img: "images/miniat/skweek.png",
    type: "Identité visuelle et motion design pour Skweek.tv, la plateforme de streaming de Fedcom dédiée au basket-ball européen",
    url: "https://www.behance.net/gallery/168450433/Post-Social-Media-Motion-Skweek"
  },
  {
    name: "Grapes",
    img: "images/miniat/grapes.png",
    type: "Identité visuelle d'une boisson fruitéepétillante aux extraits de raisin",
    url: "https://www.behance.net/gallery/189302725/Visual-Identity-Grapes-Soda-Can"
  },
  {
    name: "Blabla Pizza",
    img: "images/miniat/blabla_pizza.png",
    type: "Post pour les réseaux sociaux et motion design dans le thème Pac-Man qui mange la concurrence d'une pizzeria de la chaine de fast-food \"Blabla Pizza\" située à Nîmes",
    url: "https://www.behance.net/gallery/151837229/Post-Social-Media-Motion-Blabla-Pizza-Nmes"
  },
  {
    name: "Les Pingouistes",
    img: "images/miniat/les_pingouistes.jpg",
    type: "Motion design présentant les personnes et les services de l'agence de communication \"Les Pingouistes\"",
    url: "https://www.behance.net/gallery/141702855/Motion-Les-Pingouistes"
  },
  {
    name: "Tā Energy",
    img: "images/miniat/ta_energy.png",
    type: "Motion design de la marque de barre énergétique pour les sportifs de haut niveau \"Tā Energy\"",
    url: "https://www.behance.net/gallery/188538119/Post-Social-Media-Motion-Ta-Energy"
  },
  {
    name: "Basic Fit",
    img: "images/miniat/basic_fit.jpg",
    type: "Motion design et animation 2D pour la chaine de salle de sport \"Basic Fit\"",
    url: "https://www.behance.net/gallery/140781913/Motion-Animation-2D-Basic-Fit"
  },
  {
    name: "Hubside.Store",
    img: "images/miniat/hubside_store.png",
    type: "Motion design présentant les services de la plateforme \"Hubside.Store\" spécialisée dans la vente, location, reprise, reconditionnement et réparation des appareils connectés",
    url: "https://www.behance.net/gallery/135969227/Motion-HubsideStore"
  },
  {
    name: "Cikaba",
    img: "images/miniat/cikaba.png",
    type: "Identité Visuelle et motion design pour la plateforme \"Cikaba\" spécialisée dans les solutions digitales QHSE pour les entreprises",
    url: "https://www.behance.net/gallery/178886761/Project-management-Motion-Cikaba"
  },
  {
    name: "Bricks.co",
    img: "images/miniat/bricks.png",
    type: "Motion design pour la plateforme d'investissement immobilier \"Bricks.co\"",
    url: "https://www.behance.net/gallery/155706643/Motion-Bricksco"
  },
  {
    name: "Le Tour de Mericq en 80 jours",
    img: "images/miniat/groupe_mericq.png",
    type: "Motion design pour les réseaux sociaux du Groupe Mericq, spécialiste dans l'achat et revente de produits de la mer, présentant chaque entrepôt du groupe partout en France",
    url: "https://www.behance.net/gallery/150537997/PROJET-MOTION-MERICQ-Tour-MERICQ-en-80-Jours"
  },
  {
    name: "100% Radio",
    img: "images/miniat/100_radio.png",
    type: "Motion design pour la radio locale \"100% Radio\"",
    url: "https://www.behance.net/gallery/150540007/Motion-SAS-Tydo-100-Radio"
  },
  {
    name: "INCO Green",
    img: "images/miniat/inco_green.png",
    type: "Support print de la campagne de sensibilisation au développement durable \"Get into Green\" organisée par INCO",
    url: "https://www.behance.net/gallery/134296419/Print-Flyer-INCO-GET-INTO-GREEN"
  }
]
};


tabLinks[0].style.color = "#ff4c60"; // couleur initale onglet actif Compétences


// tabs skills, experiences, education
tabLinks.forEach((link, index) => {
  divContent.innerHTML = `<ul class="skills-list">
  <li><span>Développement web</span><br>HTML/CSS, JavaScript, React, Redux, jQuery, Sass, Bootstrap, D3.js, Python</li>
  <li><span>Bureautique</span><br>Word, Excel, OneNote, Outlook, PowerPoint, Google Docs, Google Slides, Acrobat</li>
  <li><span>Outil de design</span><br>Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects</li>
  <li><span>Soft Skills</span><br>Autonome, créatif, méthodique, esprit d'équipe</li>
  <li><span>Langues</span><br>Français (Langue maternelle) / Anglais (B2)</li>
</ul>
`;






  link.addEventListener("click", () => {
    if (index === 0) {
      divContent.innerHTML = `<ul class="skills-list">
  <li><span>Développement web</span><br>HTML/CSS, JavaScript, React, Redux, jQuery, Sass, Bootstrap, D3.js, Python</li>
  <li><span>Bureautique</span><br>Word, Excel, OneNote, Outlook, PowerPoint, Google Docs, Google Slides, Acrobat</li>
  <li><span>Outil de design</span><br>Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects</li>
  <li><span>Soft Skills</span><br>Autonome, créatif, méthodique, esprit d'équipe</li>
  <li><span>Langues</span><br>Français (Langue maternelle) / Anglais (B2)</li>
</ul>
`;

link.style.color = "#ff4c60";
expLink.style.color = "#ababab";
educLink.style.color = "#ababab";

    }

    if (index === 1) {
      divContent.innerHTML = `
<ul>
  <li>
    <span>Graphiste (Motion Designer)</span><br>
    Groupe Mericq - Estillac (47)<br>
    06/2022 - 09/2022
    <ul>
      <li class="bullet-point">Communication visuelle.</li>
      <li class="bullet-point">Design de logos et packagings produits.</li>
      <li class="bullet-point">Motion design et vidéo promotionnelle.</li>
    </ul>
  </li>
<div class="divider"></div>
  <li>
    <span>Graphic & Motion Designer</span><br>
    INCO - Paris (75)<br>
    07/2021 - 12/2021
    <ul>
      <li class="bullet-point">Création d’identité graphique.</li>
      <li class="bullet-point">Montage vidéo / motion pour les réseaux.</li>
      <li class="bullet-point">Gestion de pages web et UI/UX.</li>
    </ul>
  </li>
<div class="divider"></div>
  <li>
    <span>Assistant graphiste et communication</span><br>
    Campus Carlone - Nice (06)<br>
    07/2020 - 09/2020
    <ul>
      <li class="bullet-point">Création d'affiches et de kakémonos.</li>
      <li class="bullet-point">Réalisation d'une bannière pour le site web.</li>
      <li class="bullet-point">Élaboration de la signalétique du campus.</li>
    </ul>
  </li>
</ul>
`;

link.style.color = "#ff4c60";
skillLink.style.color = "#ababab";
educLink.style.color = "#ababab";


    }

    if (index === 2) {
      divContent.innerHTML = `<ul>
      <li><span>2024 - en cours</span><br>Autoformation Développeur Web</li>
     <li><span>2019 - 2021</span><br>Master Management Image Jeu vidéo Créativité</li>
     <li><span>2016 - 2019</span><br>Licence Arts Plastiques</li>
     <li><span>2016</span><br>Bac S</li>
</ul>
`;
link.style.color = "#ff4c60";
skillLink.style.color = "#ababab";
expLink.style.color = "#ababab";
    }
  });
});




// more works
let moreDisplay = false;

 // Logique pour afficher plus de travaux
moreBtn.addEventListener("click", () => {
 
  if (moreDisplay === false) {
    moreBtn.innerText = "Voir moins";
    moreDisplay = true;
    linkWork.portfolio.forEach((work) => {
      moreWork.innerHTML += `
      <div class="work">
        <img src="${work.img}" alt="${work.name}">
        <div class="layer">
          <h3>${work.name}</h3>
          <p>${work.type}</p>
          <a href="${work.url}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      `;
    });
  } else {
    moreBtn.innerText = "Voir plus";
    moreDisplay = false;
    moreWork.innerHTML = "";
  }
});


// more projects
let moreProjDisplay = false;  
  // Logique pour afficher plus de projets
moreProjBtn.addEventListener("click", () => {

  if (moreProjDisplay === false) {
    moreProjBtn.innerText = "Voir moins";
    moreProjDisplay = true;
    linkWork.projects.forEach((proj) => {
      moreProj.innerHTML += `
      <div class="project">
        <img src="${proj.img}" alt="${proj.name}">
        <div class="layer">
          <h3>${proj.name}</h3>
          <p>${proj.type}</p>
          <a href="${proj.url}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      `;
    });
  } else {
    moreProjBtn.innerText = "Voir plus";
    moreProjDisplay = false;
    moreProj.innerHTML = "";
  }
});



// side menu responsive
const openSideMenu = () => {
  sideMenu.style.right = "0";
};

const closeSideMenu = () => {
  sideMenu.style.right = "-250px";
};

openMenu.addEventListener("click", openSideMenu);
closeMenu.addEventListener("click", closeSideMenu);



// Form Google Sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxKDA29BFn78f-5JqbADc3RIVGC6FQZHNWyM5n6W3th9e5XFSBFYkvcfTgew44Kzz0t/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message envoyé avec succès !";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000); // Efface le message après 5 secondes
      form.reset(); // Réinitialise le formulaire
    })
    .catch((error) => console.error("Error!", error.message));
});

/*Bien vérifier dans le code de "extension > apps script" du google sheet, que var sheetName = 'Feuille 1' 
et non pas var sheetName = 'Sheet1' pour que cela fonctionne bien */


