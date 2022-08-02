    

let personas = [];
let personasEliminadas = [];
personas = personas.concat(JSON.parse(localStorage.getItem("personas")) || []);
iterar();
personasEliminadas = personasEliminadas.concat(JSON.parse(localStorage.getItem("personas Eliminadas")) || []);iterar();
iterarr();



// se registra  las personas
function registrar() {

    let nombre = document.querySelector("#nombre").value;
    let cedula = document.querySelector("#cedula").value;
    let fecha = document.querySelector("#fecha").value;
    console.log(fecha)
    // da un id
    let id = 0;

    if (personas.length) {
        id = personas[personas.length - 1].id + 1;
    }
    console.log("este es el id" + id)
    // da una alerta todos los campos son obligatorios o continua normal con el programa
    if ([id, nombre, cedula, fecha].includes("")) {
        //nombre===``,
        alert("todos los campos son obligatorios");
    } else {
        crearPersona(id, nombre, cedula, fecha);
        iterar();
    }

}




// se crea la persona dentro del arr
function crearPersona(
    id,
    nombre,
    cedula,
    fecha) {
    let nuevaPersona = {

        nombre,
        cedula,
        fecha,
        id

    }
    console.log(id);
    console.log(nombre);
    console.log(cedula);
    console.log(fecha);

    personas.push(nuevaPersona);
    localStorage.setItem("personas", JSON.stringify(personas));
}
function formatearFecha(fecha){

    let newfecha=new Date(fecha);
    let opciones= {
    year:"numeric",
    month:"long",
    day:"2-digit"
    
    }
    
    return newfecha.toDateString("es-CO" , opciones );
    
    
      
    }

function borrarElemento(id) {
    // en el arr videoJuego ubiqueme en videojuego y me busca videoJuegos y me retorna  valor diferente a id
    personas = personas.filter((personas => {
        return personas.id !== id;
    }));
    localStorage.setItem("personas", JSON.stringify(personas));
    iterar();

    personasEliminadas.push(personas);
    localStorage.setItem("personas Eliminadas", JSON.stringify(personasEliminadas));
    iterar();
    iterarr();
    
}


function iterar() {
    var usejs = JSON.parse(localStorage.getItem("personas"));



    if (usejs === null) {
        mascotas = [];
    } else {
        const resultado = usejs.map(
            (datos) =>
                `<tr>
                    <td>${datos.id}</td>
                    <td>${datos.nombre}</td>
                    <td>${datos.cedula}</td>
                    <td >${datos.fecha}</td>
                    <td> ${datos.edad}</td>
                    <td><input type="button" value="borrar" onclick="borrarElemento(${datos.id})"/></td>
                    <td><input type="button" value="editar" onclick="editar(${datos})"/></td>
         
                   
                </tr>`
        );

        document.querySelector("#tbody").innerHTML = resultado;
    }
}



function iterarr() {

    let resultado="";
  
    for(let i=0; i<personasEliminadas.length; i++){
      resultado+=`
        <tr>
          <td>${personasEliminadas[i].nombre}</td>
          <td>${personasEliminadas[i].cedula}</td>
          <td>${formatearFecha(personasEliminadas[i].fecha)}</td>
          <td>${personasEliminadas[i].edad}</td>
        
        
        </tr>
      `;
    }
  
    let salidas=document.getElementById("salidas");
    salidas.innerHTML=resultado;
  } 