const categoria = document.querySelector("#inputGroupSelect02")
const cantidad = document.querySelector("#cantidad")
const total = document.querySelector("#total")
const boton = document.getElementById("botoncompra")
const cajasTexto = document.querySelectorAll(".form-control")

cantidad.addEventListener("keyup", () => {
    if (cajasTexto[0].valueMissing && cajasTexto[1].valueMissing && cajasTexto[2].valueMissing) {
        boton.disabled = true
    } else {
        boton.disabled = false
    }
})

boton.addEventListener("click", (event) => {
    event.preventDefault()

})

function resumen() {
  let resultado

  switch (categoria.value) {
    case "Menores":
      resultado = 500 * cantidad.value
      break;
    case "Mayores":
      resultado = 1000 * cantidad.value
      break;
    case "General":
      resultado = 2000 * cantidad.value
      break
    case "CaC":
      resultado = 1500 * cantidad.value
      break
    default:
      resultado = 0
      break;
  }
  total.value = `Total a pagar: $${resultado}`
}

const email = document.getElementById("email");

function mail(){
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "¡Se esperaba una dirección de correo electrónico!",
    )
    alert(`La dirección que utilizaste no es válida, debe tener un "@" y tener un mínimo de 12 caracteres.`)
    ;
  } else {
    email.setCustomValidity("");
    botoncompra.onclick = alerta;
  }
}

function datos() {
  var uno = document.getElementById("texto1").value;
  var dos = document.getElementById("texto2").value;
  var tres = document.getElementById("email").value;
  var arreglo = [uno, dos, tres];
  return arreglo;
}

function alerta() {
  var arreglo = datos();
  alert(`Muchas Gracias, ${arreglo[0]} ${arreglo[1]} su compra se realizado con exito; sus entradas seran enviadas al mail : ${arreglo[2]}`);
}