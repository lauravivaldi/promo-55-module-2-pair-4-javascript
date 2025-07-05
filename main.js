document.querySelector("h1").innerHTML="Esta pagina no es compatible con la versión actual de tu navegador. Por favor, actulizalo a la versión mas reciente";

document.querySelector(".paragraph").innerHTML="Hola Mundo!";

/*document.querySelector(".list").classList.add("name--1")*/



document.querySelector(".container").innerHTML="<h1>lorem ipsum</h1><img><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>";

const image = document.createElement("img");
image.src = "http://via.placeholder.com/350x150";
const container = document.getElementsByClassName(".container");
container.appendChild(image);

