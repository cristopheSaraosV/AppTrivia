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
    inicioApp();
    textPregunta.addEventListener('blur', validarCampo);
    textRespuesta.addEventListener('blur', validarCampo);

}


//  ------------------ Funciones ------------------------
function inicioApp() {
    btnGuardar.disabled = true;
    btnVolver.disabled = true;

}

function guardarPregunta(e) {
    let pregunta = textPregunta.value;
    let respuesta = textRespuesta.value;
    e.preventDefault();
    limpiarFormulario();
    insertarPregunta(pregunta, respuesta);
}




function insertarPregunta(pregunta, respuesta) {

    console.log(respuesta);

    const modalPre = document.createElement('div'); // aqui se genera el modal
    modalPre.classList = 'container col s6'
    modalPre.innerHTML = `
    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">PREGUNTA</a>
  
    <!-- Modal Structure -->
  
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>${pregunta}</h4>
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





