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


//Funcion para validar que el número ingersado sea entre el 1 y 5.
const isBetween = (input) => {
  return input.value >= 1 && input.value <= 5;
}

//Funcion que arroja el mensaje de error
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add ("error");
  const error = formField.querySelector ("small");
  error.style.display ="block";
  error.textContent = message;
}

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove ('error');
  formField.classList.add ('success');
  const error = formField.querySelector ('small');
  error.textContent = '';
}

//Funcion para validar el número ingresado
const checkInput = (input)  => {
  let valid = false;
  if (!isBetween (input)){
    showError (input, `Debe ingresar un numero entre 1 y 5` );
    return;
  }
  showSuccess (input);
  valid = true;
  return valid;
}

//Funcion para mostrar las cards
const createCards = (pizzas) => {
  return ` 
  <h4>${pizzas.nombre}</h4>
      <img src= ${pizzas.imagen}>
      <div class="container_info">
          <p>Precio</p>
          <span>${pizzas.precio}</span>
      </div>
  `
}

const renderCards = (pizzas) => {
  card.innerHTML = pizzas.map ((pizzas) => {createCards(pizzas)})
}


const addCard = (e) => {
  e.preventDefault ();
  renderCards (pizzas);
}

const init = () => {
  addForm.addEventListener('submit', addCard)
  inputNumber.addEventListener ('input', () => checkInput (inputNumber))
}

init ();