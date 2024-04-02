const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];



//Elementos necesarios del DOM
const inputNumber = document.getElementById ("input-number")
const addForm = document.querySelector (".form_container")
const card = document.querySelector(".container")

let pizzaEncontrada = JSON.parse(localStorage.getItem('pizzaGuardada')) || [];

//Funcion para guardar en LS
const saveLocalStorage = (pizza) => {
  localStorage.setItem('pizzaGuardada', JSON.stringify(pizza));
}


//Funcion para ocultar el div al inicio
// const divHidden = () => {
//   if (!inputNumber){
//     card.classList.add ('hidden')
//     return
//   }
//   card.classList.remove ('hidden')
// }


// Funcion de error por si no se ingresa ningún número
const isValid = (input) => {
  let isValid = true
  const inputValue = input.value.trim ();
  if (!inputValue){
      card.innerHTML =
      ` 
      Error: No ingreso ningún número
      `
      isValid = false;
  }

  return isValid
}


//Funcion de error cuando ingreso un número que no esta en la lista de pizzas.id
const errorCard = () => {
  return ` 
  El número ingresado no coincide con ninguna pizza del menú.
  Ingrese un número del 1 al 5.
  `
}


//Funcion para mostrar las cards
const createCards = (pizzas) => {
  return ` 
  <h4>${pizzas.nombre}</h4>
      <img src= ${pizzas.imagen}>
      <div class="container_info">
          <p>Precio</p>
          <span>$${pizzas.precio}</span>
      </div>
  `
}



// Función render para mostrar las cards
const renderCards = (pizzas) => {
  const numberId = Number(inputNumber.value);
  pizzaEncontrada = pizzas.find (pizza => pizza.id === numberId);

  if (pizzaEncontrada){
    card.innerHTML = createCards(pizzaEncontrada);
    saveLocalStorage(pizzaEncontrada);
    return;
  }
  if (numberId > 5 ){
    card.innerHTML = errorCard()
    return;
  }  
}


const addCard = (e) => {
  e.preventDefault ();
  isValid (inputNumber);
  renderCards (pizzas);
}


const init = () => {
  addForm.addEventListener('submit', addCard);
  // document.addEventListener ('DOMContentLoaded', divHidden)
}

init ();