//  ------------------ variables      -------------------
const textPregunta = document.getElementById('textPregunta');
const textRespuesta = document.getElementById('textRespuesta');
const btnGuardar = document.getElementById('btnGuardar');
const btnVolver = document.getElementById('btnVolver');
const formulario = document.getElementById('formulario');
const modalJuego = document.getElementById('modalJuego');
//  ------------------ Event Listeners ------------------

EventListeners();

function EventListeners() {

    btnGuardar.addEventListener('click', guardarPregunta);
    desactirEnlaces();
    textPregunta.addEventListener('blur', validarCampo);
    textRespuesta.addEventListener('blur', validarCampo);

}


//  ------------------ Funciones ------------------------
function desactirEnlaces() {
    btnGuardar.disabled = true;
    btnVolver.disabled = true;

}
function AutoFocusPregunta(){
    textPregunta.focus();
}

function guardarPregunta(e) {
    let pregunta = textPregunta.value;
    let respuesta = textRespuesta.value;
    e.preventDefault();
    insertarPregunta(pregunta, respuesta);
    limpiarFormulario();
    AutoFocusPregunta();
}




function insertarPregunta(pregunta, respuesta) {

    console.log(respuesta);

    const modalPre = document.createElement('div'); // aqui se genera el modal
    modalPre.classList = 'container col s12 m3'
    modalPre.innerHTML = `
    <div class="card container  ">
    <br/>
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator responsive-img" src="img/question.svg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4"><strong>${pregunta}</strong><i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><strong>${pregunta}</strong><i class="material-icons right">close</i></span>
      <p>${respuesta}</p>
    </div>
  </div>
           
    `;
    const contenedor = document.createElement('div'); // aqui se genera el modal

    contenedor.appendChild(modalPre);
    modalJuego.appendChild(contenedor);
}




// limpiarFormulario()
function limpiarFormulario(e) {
    formulario.reset();
    desactirEnlaces();
}

// valida que el campo tenga algo escrito
function validarCampo() {
    // validar longitud del campo y que no este vacia
    validarBtn(this);

}

function validarBtn(campo) {
    if (textPregunta.value !== '' && textRespuesta.value !== '') {
        btnGuardar.disabled = false;
        btnVolver.disabled = false;
    }
}





