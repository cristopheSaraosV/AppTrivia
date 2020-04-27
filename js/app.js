//  ------------------ variables      -------------------
const textPregunta = document.getElementById('textPregunta');
const textRespuesta = document.getElementById('textRespuesta');
const btnGuardar = document.getElementById('btnGuardar');
const reset = document.getElementById('reset');
const formulario = document.getElementById('formulario');
const modalJuego = document.getElementById('modalJuego');
//  ------------------ Event Listeners ------------------

EventListeners();

function EventListeners() {

    btnGuardar.addEventListener('click',leerDatos );
    desactirEnlaces();
    textPregunta.addEventListener('blur', validarCampo);
    textRespuesta.addEventListener('blur', validarCampo);

}


//  ------------------ Funciones ------------------------


function leerDatos(){
    const Lista={
        pregunta:textPregunta.value,
        respuesta:textRespuesta.value
    };
    insertarPregunta(textRespuesta.value,textPregunta.value);
    InsertarLocal(Lista);
}

function InsertarLocal(pregunta){
    let preguntas;
    preguntas=obtenerPreguntaLocalS();
    preguntas.push(pregunta);
    localStorage.setItem('Lista',JSON.stringify(preguntas));
    limpiarFormulario();
}

function obtenerPreguntaLocalS(){
    let preguntasLS

    // comprobar si hay algo en localStorage

    if(localStorage.getItem('Lista') === null){
        preguntasLS =[];
    }else{
        preguntasLS = JSON.parse(localStorage.getItem('Lista'));
    }

    return preguntasLS;
}




function desactirEnlaces() {
    btnGuardar.disabled = true;
    reset.disabled = true;

}
function AutoFocusPregunta(){
    textPregunta.focus();
}

// limpiarFormulario()
function limpiarFormulario(e) {
    textPregunta.value="";
    textRespuesta.value="";
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
        reset.disabled = false;
    }
}




function insertarPregunta(pregunta, respuesta) {

    console.log(respuesta);

    const modalPre = document.createElement('div'); // aqui se genera el modal
    modalPre.classList = 'container col s12 m4'
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
