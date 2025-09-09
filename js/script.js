const tabLinks = document.querySelectorAll(".tab-links");
//const tabContents = document.querySelectorAll(".tab-contents");

const skillLink = document.getElementById("skill-link");
const expLink = document.getElementById("exp-link");
const educLink = document.getElementById("educ-link");

const skillContent = document.getElementById("skill-content");
const expContent = document.getElementById("exp-content");
const educContent = document.getElementById("educ-content");

const divContent = document.getElementById("div-content");

const moreBtn = document.getElementById("more-btn");
const moreWork = document.getElementById("more-work");

const moreProj = document.getElementById("more-project");
const moreProjBtn = document.getElementById("more-proj-btn");

// side menu responsive

const sideMenu = document.getElementById("side-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const tabContents = {
  Skills: [
    {
      title: "Développement web",
      example:
        "HTML/CSS, JavaScript, React, Redux, jQuery, Sass, Bootstrap, D3.js, Python",
    },
    {
      title: "Bureautique",
      example:
        "Word, Excel, OneNote, Outlook, PowerPoint, Google Docs, Google Slides, Acrobat",
    },
    {
      title: "Outil de design",
      example:
        "Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects",
    },
    {
      title: "Soft Skills",
      example: "Autonome, créatif, méthodique, esprit d'équipe",
    },
    {
      title: "Langues",
      example: "Français (Langue maternelle) / Anglais (B2)",
    },
  ],
  Expériences: [
    {
      date: "06/2022 - 09/2022",
      company: "Groupe Mericq",
      title: "Graphiste Motion designer",
      ville: "Estillac (47)",
      description: "Communication visuelle",
    },
    {
      date: "07/2021 - 12/2021",
      company: "INCO",
      title: "Motion & Graphic designer",
      ville: "Paris 10e (75)",
      description: "Création d’identité graphique",
    },
    {
      date: "07/2020 - 09/2020",
      company: "Campus Carlone",
      title: "Assistant graphiste & communication",
      ville: "Nice",
      description: "Création d'affiches et de kakémonos",
    },
  ],
  Formations: [
    {
      date: "2019 - 2021",
      diplôme: "Master Management Jeu Vidéo Image Créativité",
      school: "Université Côte d'Azur",
      ville: "Cannes (06)",
    },
    {
      date: "2016 - 2019",
      diplôme: "Licence Arts Plastiques",
      school: "Université Lille III",
      ville: "Tourcoing (59)",
    },
  ],
};


const linkWork = { 
  projects: [
  {
    name: "PokéDex",
    img: "images/dev/pokedex.png",
    type: "Projet Personnel",
    url: "https://codepen.io/LiiamD/full/raObxGv",
  },
  {
    name: "palindrome",
    img: "images/dev/palindrome_checker.png",
    type: "Projet Personnel",
    url: "https://codepen.io/LiiamD/full/zxvXrWJ",
  },
  {
    name: "react calculator",
    img: "images/dev/react_calculator.png",
    type: "Projet Personnel",
    url: "https://codepen.io/LiiamD/full/bNNYgoM",
  }
  ],
  portfolio: [
  {
    name: "Skweek",
    img: "images/miniat/skweek.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/168450433/Post-Social-Media-Motion-Skweek"
  },
  {
    name: "Grapes",
    img: "images/miniat/grapes.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/189302725/Visual-Identity-Grapes-Soda-Can"
  },
  {
    name: "Blabla Pizza",
    img: "images/miniat/blabla_pizza.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/151837229/Post-Social-Media-Motion-Blabla-Pizza-Nmes"
  },
  {
    name: "Les Pingouistes",
    img: "images/miniat/les_pingouistes.jpg",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/141702855/Motion-Les-Pingouistes"
  },
  {
    name: "Tā Energy",
    img: "images/miniat/ta_energy.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/188538119/Post-Social-Media-Motion-Ta-Energy"
  },
  {
    name: "Basic Fit",
    img: "images/miniat/basic_fit.jpg",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/140781913/Motion-Animation-2D-Basic-Fit"
  },
  {
    name: "Hubside.Store",
    img: "images/miniat/hubside_store.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/135969227/Motion-HubsideStore"
  },
  {
    name: "Cikaba",
    img: "images/miniat/cikaba.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/178886761/Project-management-Motion-Cikaba"
  },
  {
    name: "Bricks.co",
    img: "images/miniat/bricks.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/155706643/Motion-Bricksco"
  },
  {
    name: "Le Tour de Mericq en 80 jours",
    img: "images/miniat/groupe_mericq.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/150537997/PROJET-MOTION-MERICQ-Tour-MERICQ-en-80-Jours"
  },
  {
    name: "100% Radio",
    img: "images/miniat/100_radio.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/150540007/Motion-SAS-Tydo-100-Radio"
  },
  {
    name: "INCO Green",
    img: "images/miniat/inco_green.png",
    type: "Identité Visuelle",
    url: "https://www.behance.net/gallery/134296419/Print-Flyer-INCO-GET-INTO-GREEN"
  }
]
};





// tabs skills, experiences, education
tabLinks.forEach((link, index) => {
  divContent.innerHTML = `<ul>
  <li><span>Développement web</span><br>HTML/CSS, JavaScript, React, Redux, jQuery, Sass, Bootstrap, D3.js, Python</li>
  <li><span>Bureautique</span><br>Word, Excel, OneNote, Outlook, PowerPoint, Google Docs, Google Slides, Acrobat</li>
  <li><span>Outil de design</span><br>Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects</li>
  <li><span>Soft Skills</span><br>Autonome, créatif, méthodique, esprit d'équipe</li>
  <li><span>Langues</span><br>Français (Langue maternelle) / Anglais (B2)</li>
</ul>
`;

  link.addEventListener("click", () => {
    if (index === 0) {
      divContent.innerHTML = `<ul>
  <li><span>Développement web</span><br>HTML/CSS, JavaScript, React, Redux, jQuery, Sass, Bootstrap, D3.js, Python</li>
  <li><span>Bureautique</span><br>Word, Excel, OneNote, Outlook, PowerPoint, Google Docs, Google Slides, Acrobat</li>
  <li><span>Outil de design</span><br>Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects</li>
  <li><span>Soft Skills</span><br>Autonome, créatif, méthodique, esprit d'équipe</li>
  <li><span>Langues</span><br>Français (Langue maternelle) / Anglais (B2)</li>
</ul>
`;
    }

    if (index === 1) {
      divContent.innerHTML = `<ul>
      <li><span>06/2022 - 09/2022</span><br>Groupe Mericq</li>
      <li><span>07/2021 - 12/2021</span><br>INCO</li>
      <li><span>07/2020 - 09/2022</span><br>Campus Carlone</li>
 </ul>
`;
    }

    if (index === 2) {
      divContent.innerHTML = `<ul>
     <li><span>2019 - 2021</span><br>Master Management Image Jeu vidéo Créativité</li>
     <li><span>2016 - 2019</span><br>Licence Arts Plastiques</li>
     <li><span>2016</span><br>Bac S</li>
</ul>
`;
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

// Fin Form Google Sheets

