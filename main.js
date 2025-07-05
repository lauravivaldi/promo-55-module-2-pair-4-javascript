document.querySelector("h1").innerHTML="Esta pagina no es compatible con la versión actual de tu navegador. Por favor, actulizalo a la versión mas reciente";

document.querySelector(".paragraph").innerHTML="Hola Mundo!";

/*document.querySelector(".list").classList.add("name--1")*/



document.querySelector(".container").innerHTML="<h1>lorem ipsum</h1><img><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>";

// const image = document.createElement("img");
// image.src = "http://via.placeholder.com/350x150";
// const container = document.getElementsByClassName(".container");
// container.appendChild(image);


const button = document.querySelector(".button");
button.style.backgroundColor = "blue";
button.addEventListener("click", () => {
    button.style.backgroundColor = "green";
    console.log("has hecho click");
});

const textLorem = document.querySelector(".textLorem");
textLorem.addEventListener("click", () => {
    const newTextLorem = document.createElement("p");
    newTextLorem.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores itaque aliquam, quasi, delectus deleniti, corporis perspiciatis corrupti quisquam iusto neque ducimus quis cupiditate officiis facere officia. Animi, iusto libero.";
    document.body.appendChild(newTextLorem);
    console.log("has hecho click");
})

const input = document.querySelector(".input");
const formParagraph = document.querySelector(".form-paragraph");
input.addEventListener("input", (event) => {
    console.log("Estás escribiendo en el cuadro de texto");
    const value = event.currentTarget.value;
    formParagraph.textContent = value;
});

const formName = document.querySelector(".form-name");
const formButton = document.querySelector(".form-button");
formButton.addEventListener("click", (event) => {
    event.preventDefault();
    const helloText = document.createElement("span");
    const helloName = formName.value;
    helloText.textContent = "Hola " + helloName;
    form.appendChild(helloText);
});