//  ------------------ variables      -------------------
const textPregunta = document.getElementById('textPregunta');
const textRespuesta = document.getElementById('textRespuesta');
const btnGuardar = document.getElementById('btnGuardar');
const reset = document.getElementById('reset');
const formulario = document.getElementById('formulario');
const trInsert = document.getElementById('trInsert');
//  ------------------ Event Listeners ------------------

EventListeners();

function EventListeners() {

    btnGuardar.addEventListener('click',leerDatos );
    desactirEnlaces();
    textPregunta.addEventListener('blur', validarCampo);
    textRespuesta.addEventListener('blur', validarCampo);

}


//  ------------------ Funciones ------------------------


function leerDatos(e){
    e.preventDefault();
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

    const tdPregunta = document.createElement('td'); // aqui se genera el tabla
    tdPregunta.innerHTML = `
    <td>${pregunta}</td>
     `;

    const tdRespuesta = document.createElement('td'); // aqui se genera el tabla
    tdRespuesta.innerHTML = `
    <td>${respuesta}</td>
    `;

    
    const tr = document.createElement('tr'); // aqui se genera el modal
    
    tr.appendChild(tdPregunta);
    tr.appendChild(tdRespuesta);
    trInsert.appendChild(tr)
}
