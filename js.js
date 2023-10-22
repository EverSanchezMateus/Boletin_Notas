

let nombre=document.getElementById("nombre");
let mate=document.getElementById("notaMatematicas");
let soci=document.getElementById("notaSociales");
let espa=document.getElementById("notaEspaniol");
let siste=document.getElementById("notaSistemas");
let estadis=document.getElementById("notaEstadistica");
let Agregar=document.getElementById("Agregar");
let Promedio=document.getElementById("Promedio");
let informacion=document.getElementById("informacion");
let notaMasAlta=document.getElementById("notaMayor");
let darNota=document.getElementById("darNota");
let aplazado=document.getElementById("aplazadoE")
 
let listaEstudiantes=[];



Agregar.addEventListener("click",agregarBoletin);

function agregarBoletin() {
    let mat1 = +mate.value;
    let mat2 = +soci.value;
    let mat3 = +espa.value;
    let mat4 = +siste.value;
    let mat5 = +estadis.value;

    let valoresNotas = [mat1, mat2, mat3, mat4, mat5];
    let rango = true;

    for (let i = 0; i < valoresNotas.length; i++) {
        if (valoresNotas[i] < 1 || valoresNotas[i] > 5) {
            rango = false;
            break; 
        }
    }

 

    if (rango && nombre.value !== '') {
        let listaNota = [nombre.value, mat1, mat2, mat3, mat4, mat5];
        listaEstudiantes.push(listaNota);
        alert("Estudiante agregado: "+ listaNota);
    } else {
        alert("Datos Incorrectos");
    }
}

Promedio.addEventListener("click",promedio);
function promedio(){

    informacion.innerHTML="";

    for(let i=0;i<listaEstudiantes.length;i++){
        let estudiante=listaEstudiantes[i];
        let name=estudiante[0];
        let nombreEnMayusculas = name.toUpperCase();
        let notasPromedio=estudiante.slice(1);

        let suma=0;
        
        for(let j=0; j<notasPromedio.length;j++){
            suma= suma+notasPromedio[j];
        }

        let sumapromedio= suma/notasPromedio.length;


        let item=document.createElement("li");
        item.textContent= "El promedio del estudiante "+nombreEnMayusculas+" es: "+sumapromedio;
        informacion.appendChild(item);

    }
        

}

  aplazado.addEventListener("click",aplazos)

function aplazos(){

    informacion.innerHTML="";

    for(let i=0;i<listaEstudiantes.length;i++){
        let estudiante=listaEstudiantes[i];
        let name=estudiante[0];
        let nombreEnMayusculas = name.toUpperCase();
        let notasPromedio=estudiante.slice(1);

   
        
        for(let j=0; j<notasPromedio.length;j++){
           if(notasPromedio[j]<3){
            
            let item=document.createElement("li");
            item.textContent= "El estudiante "+nombreEnMayusculas+" debe repetir saco: "+notasPromedio[j];
            informacion.appendChild(item);
           }
        }

    }
   


}

notaMasAlta.addEventListener("click",notaAlta);



function notaAlta(){
    informacion.innerHTML="";
    for(let i=0;i<listaEstudiantes.length;i++){
        let estudiante=listaEstudiantes[i];
        let name=estudiante[0];
        let nombreEnMayusculas = name.toUpperCase();
        let notasEstudiante=estudiante.slice(1);
        let mayor= 0;
       

   
        
        for(let j=0; j<notasEstudiante.length;j++){
          

            if(mayor<notasEstudiante[j]){
                mayor=notasEstudiante[j];
            }

            

           
        }
        
        let item=document.createElement("li");
        item.textContent= "la nota mayor del estudiante "+nombreEnMayusculas+" es: " +mayor;
        informacion.appendChild(item);

    }


}
darNota.addEventListener("click",mostrarNotas);

function mostrarNotas(){
     informacion.innerHTML="";

    for(let i=0;i<listaEstudiantes.length;i++){
        let estudiante=listaEstudiantes[i];
        let name=estudiante[0];
        let nombreEnMayusculas = name.toUpperCase();
        let notasPromedio=estudiante.slice(1);


        
       


        let item=document.createElement("li");
        item.textContent= "las notas del estudiante: "+nombreEnMayusculas+" son: "+notasPromedio;
        informacion.appendChild(item);
    }
    
   
}



    
    
