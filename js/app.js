//  ------------------ variables      -------------------
const textPregunta = document.getElementById('textPregunta');
const textRespuesta = document.getElementById('textRespuesta');
const btnGuardar = document.getElementById('btnGuardar');
const btnReset = document.getElementById('reset');
const formulario = document.getElementById('formulario');
const trInsert = document.getElementById('trInsert');
const Juego = document.getElementById('Juego');
const JuegoCont= document.getElementById('JuegoCont');

//  ------------------ Event Listeners ------------------

EventListeners();

function EventListeners() {


    btnGuardar.addEventListener('click', leerDatos);
    desactirEnlaces();
    textPregunta.addEventListener('blur', validarCampo);
    textRespuesta.addEventListener('blur', validarCampo);
    btnReset.addEventListener('click', borrarLocalStorage);
    document.addEventListener('DOMContentLoaded', leerLocalStorage); // se ejecuta una vez cargado todo el documento
    Juego.addEventListener('click',generarTabla);    


}


//  ------------------ Funciones ------------------------




// Traer y imprimir todo los recursos del localHost
function leerLocalStorage() {
    var preguntasLs;
    preguntasLs = obtenerPreguntaLocalS();

    preguntasLs.forEach(pregunta => {
        // construir el template
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>
         ${pregunta.pregunta}     
     </td>
     <td>
         <a href="#"" class="borrar-curso"><a class="waves-effect waves-light btn ">Mostrar</a>
         </> 
     </td>
     <td>
     ${pregunta.respuesta}     

     </td>
    
     `
        trInsert.appendChild(tr);
    });

};

function generarTabla(){
    JuegoCont.hidden=false;

};



// obtener Datos de los formularios
function leerDatos(e) {
    e.preventDefault();
    const Lista = {
        pregunta: textPregunta.value,
        respuesta: textRespuesta.value
    };
    insertarPregunta(textRespuesta.value, textPregunta.value);
    InsertarLocal(Lista);
};

// Inserta las pregunta en el localHost
function InsertarLocal(pregunta) {
    let preguntas;
    preguntas = obtenerPreguntaLocalS();
    preguntas.push(pregunta);
    localStorage.setItem('Lista', JSON.stringify(preguntas));
    limpiarFormulario();
}

// Obtiene las pregunta del localHost
function obtenerPreguntaLocalS() {
    let preguntasLS

    // comprobar si hay algo en localStorage

    if (localStorage.getItem('Lista') === null) {
        preguntasLS = [];
    } else {
        preguntasLS = JSON.parse(localStorage.getItem('Lista'));
    }

    return preguntasLS;
}

// Se insertar en el dom la pregunta
function insertarPregunta(pregunta, respuesta) {
    var preguntasLs;
    preguntasLs = obtenerPreguntaLocalS();

    preguntasLs.forEach(pregunta => {
        // construir el template
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>
         ${pregunta.pregunta}     
     </td>
     <td>
         <a href="#"" class="borrar-curso"><a class="waves-effect waves-light btn ">Mostrar</a>
         </> 
     </td>
     <td>
     ${pregunta.respuesta}     

     </td>
    
     `
        trInsert.appendChild(tr);
    });
}






// borrar Datos
function borrarLocalStorage() {
    localStorage.clear();
    location.reload();
}

// deesactiva los botones
function desactirEnlaces() {
    btnGuardar.disabled = true;

}
function AutoFocusPregunta() {
    textPregunta.focus();
}

// limpiarFormulario()
function limpiarFormulario(e) {
    textPregunta.value = "";
    textRespuesta.value = "";
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
    }
}
