//  ------------------ variables      -------------------
const textNota = document.getElementById('textNota');
const btnGuardar = document.getElementById('btnGuardar');
const btnReset = document.getElementById('reset');
const formulario = document.getElementById('formulario');
const trInsert = document.getElementById('trInsert');

//  ------------------ Event Listeners ------------------

EventListeners();

function EventListeners() {


    btnGuardar.addEventListener('click', leerDatos);
    btnReset.addEventListener('click', borrarLocalStorage);
    document.addEventListener('DOMContentLoaded', leerLocalStorage); // se ejecuta una vez cargado todo el documento


}


//  ------------------ Funciones ------------------------




// Traer y imprimir todo los recursos del localHost
function leerLocalStorage() {
    var notasLS;
    notasLS = obtenerPreguntaLocalS();

    notasLS.forEach(nota => {
        // construir el template
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>
       ${nota.nota}     
     </td>
     <td>
         <a href="#"" data-id="${nota.indice}" class="borrar-curso"><a class="waves-effect waves-light btn amber darken-4  ">Editar</a>
         </$> 
     </td>
     <td>
     <a href="#"" data-id="${nota.indice}" class="borrar-curso"><a class="waves-effect waves-light btn  red darken-4 ">Borrar</a>
     </> 
     </td>
    
     `
        trInsert.appendChild(tr);
    });

};

function ObtenerPosicionLS(){
    let notasLs = obtenerPreguntaLocalS();
    let GenerarIndice=notasLs.length+1;
    return GenerarIndice
}


// obtener Datos de los formularios
function leerDatos(e) {
    e.preventDefault();
    let indice=ObtenerPosicionLS();
    if(textNota.value.length>0){
        const Lista = {
            nota: textNota.value,
            indice:indice
        };
        M.toast({html: 'Se registro correctamente', classes: 'rounded'});

        insertarNota(textNota.value,indice);
        InsertarLocal(Lista);
       
    }
    else{
        var toastHTML = '<span>No puedes guardar un campo vacio</span>';
        M.toast({html: toastHTML});
              
    }
   
};

// Inserta las pregunta en el localHost
function InsertarLocal(nota) {
    let notas;
    notas = obtenerPreguntaLocalS();
    notas.push(nota);
    localStorage.setItem('Lista', JSON.stringify(notas));
    limpiarFormulario();
}

// Obtiene las pregunta del localHost
function obtenerPreguntaLocalS() {
    let notasLS

    // comprobar si hay algo en localStorage

    if (localStorage.getItem('Lista') === null) {
        notasLS = [];
    } else {
        notasLS = JSON.parse(localStorage.getItem('Lista'));
    }

    return notasLS;
}

// Se insertar en el dom la pregunta
function insertarNota(nota,indice) {
    var notasLs;
    notasLs = obtenerPreguntaLocalS();

    // construir el template
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>
         ${nota}     
     </td>
     <td>
         <a href="#"" data-id="${indice}" class="borrar-curso"><a class="waves-effect waves-light btn amber darken-4">Editar</a>
         </> 
     </td>
     <td>
     <a href="#"" data-id="${indice}" class="borrar-curso"><a class="waves-effect waves-light btn  red darken-4">Borrar</a>
     </> 
     </td>
    
     `
    trInsert.appendChild(tr);
}






// borrar Datos
function borrarLocalStorage() {
    localStorage.clear();
    M.toast({html: 'Limpieza correcta', classes: 'rounded'});
    window.setTimeout(Recargar,2000);

    ;

}

function Recargar(){
    location.reload();
}

function AutoFocusPregunta() {
    textPregunta.focus();
}

// limpiarFormulario()
function limpiarFormulario(e) {
    textNota.value = "";
}