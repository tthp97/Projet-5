const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;
const arrowL = document.querySelector(".arrow_left");
const arrowR = document.querySelector(".arrow_right");
const Alldot = document.querySelectorAll(".dot");
let emplacementImage = document.querySelector(".banner-img");
let totalImage = 4;

//FONCTIONS

//Mettre à jour le slide ert le bullet point.
function afficherSlides(currentIndex) {
  //Maj Bullet Point
  Alldot.forEach((dot, index) => {
    if (currentIndex === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
  //Maj image et texte
  emplacementImage.src = `assets/images/slideshow/${slides[currentIndex].image}`;
  const tagLine = slides[currentIndex].tagLine;
  document.querySelector("p").innerHTML = tagLine;
}

//Fonction du clic droit
function gérerClicDroit() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  afficherSlides(currentIndex);
}

//Fonction du clic Gauche
function gérerClicGauche() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  afficherSlides(currentIndex);
}

//INITIALISATION
//Au clic sur l'image de flèche gauche, retour d'une image en arrière.
arrowL.addEventListener("click", gérerClicGauche);
//Au clic sur l'image de flèche droite, avancée d'une image.
arrowR.addEventListener("click", gérerClicDroit);

//Appel de la fonction permettant la maj du bullet point et du slide
afficherSlides(currentIndex);
