
/*let contenidoAcercaDe = "Sobre mi";

let gilmer = "Hola";


let acercaDe = document.querySelector('.ejercicio');


let parrafo = document.querySelector('.parrafo1');


function cambiarTexto( nombre, ciudad, gusto){

    let contenido = `Hola mi nombre es ${nombre}, soy de ${ciudad} y me gusta ${gusto}.`;

    return contenido;

}


parrafo.innerHTML = cambiarTexto( 'Anibal',  'Lima', 'Caminar'); 
*/

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 6) {
    warnings += `El nombre debe contener más de 6 caracteres`;
    valido = false;
  }

  

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
    console.log(parrafo.innerHTML);
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
}

);