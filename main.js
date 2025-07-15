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

// ejercicios condicionales

const inputName = document.querySelector(".input-name").value;

if (inputName === "Maria" || inputName === "Luisa" ) {
    console.log("Bienvenida")
}
else {
    console.log("Lo siento, pero el usuario que has introducido no está registrado")
};


function findNumber() {
    const number = document.querySelector(".number").value; 
    if (number === 0) {
    console.log('El número es 0')
    } else if (number < 0) {
    console.log('El número es negativo')
    } else if (number + 2 > 13 && number + 2 <= 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
    } else if (number > 20 && number < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
    } else {
    console.log('el número no es 123123125')
    }
}

const buttonNumber = document.querySelector(".button-number");
buttonNumber.onclick = findNumber;

//Ejercicios tipos de datos

//Ejercio 1

const numLaura = 25;
const numBelen = 9;

const sum = numBelen + numLaura;
console.log (sum);

//Ejercicio 2


const superWave = document.querySelector('.super-wave');
superWave.classList.add(".wave-text");
console.log("superWave", superWave);

//Ejercicio 3

const kiwisprice = 5;
const kiwiKilos = 2;
const perasPrice = 2;
const perasKilos = 3;
const grapesPrice = 4;
const grapesKilos = 0.5;

const kiwiTotal = kiwisprice * kiwiKilos;
console.log(kiwiTotal);

const perasTotal = perasPrice * perasKilos;
console.log(perasTotal);

const grapesTotal = grapesPrice * grapesKilos;
console.log(grapesTotal);

const frutTotalList = kiwiTotal + perasTotal + grapesTotal;
console.log(frutTotalList);

//Ejercicio 4

const age = 60;
const yearhours = ( 24 * 365);
const hourslived = (yearhours * age);
console.log(hourslived);


//Ejercicio 5


const firstDogImage = 
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const firstDog = document.createElement('li');
const imageDina = document.createElement('img');
imageDina.src = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
firstDog.appendChild(imageDina);


document.querySelector(".dog-list").innerHTML = `${firstDog} ${firstDogName}`;

//Ejercicio 6

const lauraCaracters = "Laura Murray Alvarez";
console.log(lauraCaracters.length);
//Cuenta los espacios//

document.querySelector(".name-caracters").innerHTML = `El nombre de mi compañera es ${lauraCaracters}, y está compuesto por ${lauraCaracters.length} caracteres`;

//Ejercicio 1 funciones

function multi (a, b) {
    return a * b;
};

let resultMulti = multi(8, 4);
console.log(resultMulti);

resultMulti = multi(3, 9);
console.log(resultMulti);

function mediaNumber (a, b, c, d) {
    return (a + b + c + d) / 4;
};

let resultMedia = mediaNumber(3, 7, 9, 14);
console.log(resultMedia);

resultMedia = mediaNumber(8, 14, 23, 4);
console.log(resultMedia);

function isEvenOdd (number) {
    if (number % 2 === 0) {
        console.log("Este número es PAR");
    }
    else {
        console.log("Este número es IMPAR");
    }
    return number % 2 === 0;
};

console.log(isEvenOdd(4));
console.log(isEvenOdd(9));
console.log(isEvenOdd(17));
console.log(isEvenOdd(42));
console.log(isEvenOdd(35));

//Ejercicio 2 funciones

// Crea una función que reciba por parámetro un número, que representará un precio, 
// y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. 
// "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
// Para probar que funciona, ejecuta la función recogiendo 
// el resultado en una variable e imprímela en la consola para comprobarlo.

const totalPrice = (number) => {
    const iva = (number * 21) / 100;
    const total = number + iva;
    return `Precio sin IVA: ${number}, IVA: ${iva} y Total: ${total}`;
};

let resultIVA = totalPrice(10);
console.log(resultIVA);

resultIVA = totalPrice(25);
console.log(resultIVA);

//Ejercicio 3 funciones

let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); 
console.log(mySecretLetter());

//Ejercicio extra query selector

const getEl = (selector) => {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) {
        console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    } 
    else {
        return htmlElement;}
};

const titleEl = getEl('.title');
console.log(getEl(".title"));

const spanEl = getEl('.span');
console.log(getEl(".span"));

const noExist = getEl(".no-exist");

const numberParagraph = getEl(".number-paragraph");
console.log(numberParagraph.innerHTML);
const trueNumber = Number(numberParagraph.textContent);
console.log("Número convertido:", trueNumber);
console.log(isEvenOdd(trueNumber));

//. Bio de Adalabers
//Instrucciones:

//Crea un objeto llamado adalaber1 con:

//Nombre: 'Susana'
//Edad: 34
//Profesión: 'periodista'
//Muestra esta frase en la consola o en la web usando las propiedades del objeto:
//Copy
//Mi nombre es Susana, tengo 34 años y soy periodista

const adalaber1 = {
    name: "Susana",
    age: 34,
    profesion: "periodista",
};

console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.profesion}`);

//
//Repite los pasos para crear adalaber2 con:

//Nombre: 'Rocío'
//Edad: 25
//Profesión: 'actriz'

const adalaber2 = {
    name: "Rocio",
    age: 25,
    profesion: "actriz",
};

console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.profesion}`);

//2. A la carrera

//Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que 
// muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.

//Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número.
//  Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy 
//corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.

adalaber1.run = () => {console.log("Estoy corriendo")};

adalaber1.run();

adalaber1.runAMarathon = {distance: 50};
console.log(`Estoy corriendo un maratón de ${adalaber1.runAMarathon.distance} kilómetros`);


//Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que
//  muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el 
// nombre, edad y estudios que están almacenados en el objeto.

//Hacemos lo mismo para adalaber2. ¿Hemos tenido que modificar mucho el método showBio? 
// ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?

adalaber1.showBio = () => {
console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age}, y soy ${adalaber1.profesion}`)};

adalaber1.showBio();

adalaber2.showBio = () => {
console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age}, y soy ${adalaber2.profesion}`)};

adalaber2.showBio();


// Estructura de datos para un usuario

//Crea un objeto para almacenar la información de un usuario y una constante llamada job donde 
// guardaremos el valor 'developer'.
//  A continuación sigue los siguiente pasos:
//Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):
//Añades una propiedad llamada firstName y dale un valor.
//Añade una propiedad llamada lastName y le dale un valor.
//Añade una propiedad llamada age y le dale un valor numérico.
//Añade una propiedad job a la que dale el valor de la constante job.
//Comprueba que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, 
// este es correcto.
//Cambia el nombre del usuario por otro distinto.
//Aumenta en 1 la edad del usuario.
//Comprueba de nuevo que todo sigue funcionando correctamente.

const job = "developer";

const userName = {
  
};

userName.firstName = "María";
userName.lastName = "Perez";
userName.age = 54;


userName.job = `${job}`;
console.log(userName);

userName.firstName = "Ana";
userName.age = ++userName.age;

console.log(userName);





