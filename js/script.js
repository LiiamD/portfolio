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
    url: "https://liiamd.github.io/the-pokemon-search-app/",
  },
  {
    name: "React Palindrome Checker",
    img: "images/dev/palindrome_checker.png",
    type: "Mini-application en React.js qui vérifie si une chaîne de caractères (string) est un palindrome (ex : « kayak). Manipulation de chaîne de caractères (.replace(), .toLowerCase(), etc), utilisation de regex (regular expression) et logique conditionnelle.",
    url: "https://liiamd.github.io/react-palindrome-checker/",
  },
  {
    name: "The Legend of Gendrick",
    img: "images/dev/gendrick.png",
    type: "Un jeu de rôle (RPG) entièrement basé sur du JavaScript pour pratiquer la logique et les structures de données. Jeu dans lequel le joueur peut se déplacer entre différents lieux, acheter des objets ou de la santé, combattre des monstres et gérer ses ressources comme l’or, la santé, l’expérience et l’inventaire. Manipulation du DOM, gestion des événements (.addEventListener()), utilisation de boucles et de conditions, etc.",
    url: "https://liiamd.github.io/The-Legend-of-Gendrick/",
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



// more works
let moreDisplay = false;

 // Logique pour afficher plus de travaux
moreBtn.addEventListener("click", () => {
  moreDisplay = !moreDisplay;

  if (moreDisplay) {
    moreBtn.innerText = "Voir moins";

    // Injecte le contenu UNE SEULE FOIS
    if (moreWork.innerHTML === "") {
      linkWork.portfolio.forEach((work) => {
        moreWork.innerHTML += `
          <div class="work">
            <img src="${work.img}" alt="${work.name}">
            <div class="layer">
              <h3>${work.name}</h3>
              <p>${work.type}</p>
              <a href="${work.url}" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        `;
      });
    }

    // Laisse le DOM respirer avant l’animation
    requestAnimationFrame(() => {
      moreWork.classList.add("active");
    });

  } else {
    moreBtn.innerText = "Voir plus";
    moreWork.classList.remove("active");

    // Supprime le contenu APRÈS la transition
    setTimeout(() => {
      moreWork.innerHTML = "";
    }, 900); // doit matcher le CSS
  }
});


// more projects
let moreProjDisplay = false;  
  // Logique pour afficher plus de projets
moreProjBtn.addEventListener("click", () => {
  moreProjDisplay = !moreProjDisplay;

  if (moreProjDisplay) {
    moreProjBtn.innerText = "Voir moins";

    if (moreProj.innerHTML === "") {
      linkWork.projects.forEach((proj) => {
        moreProj.innerHTML += `
          <div class="project">
            <img src="${proj.img}" alt="${proj.name}">
            <div class="layer">
              <h3>${proj.name}</h3>
              <p>${proj.type}</p>
              <a href="${proj.url}" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        `;
      });
    }

    requestAnimationFrame(() => {
      moreProj.classList.add("active");
    });

  } else {
    moreProjBtn.innerText = "Voir plus";
    moreProj.classList.remove("active");

    setTimeout(() => {
      moreProj.innerHTML = "";
    }, 900);
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




