const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  titulo.textContent = "¡Hola Jhon!";
  titulo.style.color = "blue";
});

//consta variable no resignada, es fija (titulo nombre q damos a la variable)
//JavaScript utiliza document para poder acceder a los elementos de nuestro HTML.
//getElementById("titulo") dice q busque un valor con ese ID dentro de html,

const mensajes = document.getElementById("mensajes");

agregar.addEventListener("click", function () {
  const nuevoMensaje = document.createElement("p");
  nuevoMensaje.textContent = "Nuevo mensaje";
  mensajes.appendChild(nuevoMensaje);
});
// el createElement crea un nuevo parrafo de linea
//el appendChild dice insertar un elemento dentro de otro tantas veces como se de el click

const teclado = document.getElementById("teclado");
const resultado = document.getElementById("resultado");

teclado.addEventListener("keydown", function (tecla) {
  resultado.textContent = "Presionaste: " + tecla.key;
});

// el keydown nos dice q cuando se toque una tecla
//el textContent cambia lo q has escrito en el lugar de resultado

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  //sirve para que no se envie el formulario automaticamente
  if (nombre.value === "") {
    mensaje.textContent = "Por favor, escribe tu nombre";
  } else {
    mensaje.textContent = "Hola " + nombre.value;
  }
});
