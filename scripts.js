//Ejercicio 1: Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
let linkCollection = document.querySelectorAll("a");
let links = Array.from(linkCollection);
// Cutre
// for(let index = 0; index < links.length; index++) {
//   let link = links[index];
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log('Link pressed');
//   });
// }

// Poco mejor
// for(index in links) {
//   links[index].addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log('Link pressed');
//   });
// }

// Proaso
links.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    console.log('Link pressed');
  });
});


// 2.1 images
let coleccionImagenes = document.querySelectorAll('img');
coleccionImagenes.forEach(function (image){
  image.addEventListener("click", function gifsito(){
    image.src = './assets/magic-1.gif'  
  })
  
});
console.log(coleccionImagenes)

//2.2 parrafos
let coleccionParrafos = document.querySelectorAll("p");
coleccionParrafos.forEach(function (paragraph){
  paragraph.addEventListener("click", function color(){
      paragraph.style.backgroundColor = "purple"
      paragraph.style.color = "white"
  })

});
console.log(coleccionParrafos);

//2.3 article o section
let coleccionSeccionesArticulos = document.querySelectorAll("section , article");
coleccionSeccionesArticulos.forEach(function (sectionArticle){
  sectionArticle.addEventListener("click", function fondo(){
    sectionArticle.style.backgroundColor = "#DCCFEC"
  })
  
});
console.log(coleccionSeccionesArticulos);

//3 

