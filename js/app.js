//  ------------------ variables      -------------------
const cantidadPre = document.getElementById('nPreguntas');  
const botonGenerar = document.getElementById('botonGenerar');
const ContenedorFormulario = document.getElementById('Formulario'); // contenedor del formulario de ingresar preguntas
//  ------------------ Event Listeners ------------------
EventListeners();
function EventListeners(){

    botonGenerar.addEventListener('click',generarFormulario);

}


//  ------------------ Funciones ------------------------
function generarFormulario(e){
    botonGenerar.disabled=true;

        const formulario= document.createElement('div');
        formulario.innerHTML=
            `
            <div class="col s12">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h5>N°</h5>
                    </div>
                    <div class="col s12">
                        <br>
                        <div class="input-field col s12 m10">
                            <input id="PREGUNTA" type="text" class="validate">
                            <label for="PREGUNTA">PREGUNTA</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <br>
                        <div class="input-field col s12 m10">
                            <input id="RESPUESTA" type="text" class="validate">
                            <label for="RESPUESTA">RESPUESTA</label>
                        </div>
                        <div class="input-field col s12 m2">
                            <a type="submit" id="botonInsertar" class="waves-effect waves-light btn  blue darken-3"><i class="material-icons left">send</i>CONTINUAR</a>
                        </div>
                    </div>
                    <div class="col s12"></div>
                </div>
            </div>
            </div>
            `
        ;
        ContenedorFormulario.appendChild(formulario);
        const botonInsertar = document.getElementById('botonInsertar');

        let cantidadP = obtenerCantidadPregunta(e)
        botonInsertar.addEventListener('click',insentar);

}


function obtenerCantidadPregunta(e){ // se obtiene la cantidad de preguntas a generar
    e.preventDefault();    
    console.log(cantidadPre.value);

}

function insentar(){
    let matriz=[];
    let pregunta= document.getElementById('PREGUNTA').value;
    matriz.push(pregunta);
    console.log(matriz);

}

