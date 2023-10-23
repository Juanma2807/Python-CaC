const categoria = document.querySelector("#categoria")
const cantidad = document.querySelector("#cantidad")
const total = document.querySelector("#total")

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
      break;
  }
  total.value = `Total a pagar: $${resultado}`
}

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "¡Se esperaba una dirección de correo electrónico!",
    );
  } else {
    email.setCustomValidity("");
  }
});


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
botoncompra.onclick = alerta;



