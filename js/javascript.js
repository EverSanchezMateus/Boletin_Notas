

    let valorNotas=document.getElementById("nota");
    let AgregarNota= document.getElementById("enviar");
    let actualizarNotas1=document.getElementById("mostrarNotas")
    let listaNota=document.getElementById("listaNotas");
    let promedioTotal=document.getElementById("promedio");
    let aplazos=document.getElementById("aplazado");
    let notaAlta=document.getElementById("notaAlta")
    let totalNotas=[]
    let suma=0;

    AgregarNota.addEventListener("click",notas)
    function notas(){
        
        let valorNota=parseFloat(valorNotas.value);
        if(valorNota>=1 && valorNota<=5){

        totalNotas.push(valorNota);
        valorNotas.value="";
        suma=suma+valorNota;
        }
        else{
            alert("El valor no es valido!")
        }
        
      

        
    }
    actualizarNotas1.addEventListener("click",actualizarNotas)

    function actualizarNotas(){
        listaNota.innerHTML="";
      for(i=0;i<totalNotas.length;i++){

        let item = document.createElement("li");
            item.textContent = (i + 1) + " - Nota " +  ": " + totalNotas[i];
            listaNota.appendChild(item);
            
      }

    }

    promedioTotal.addEventListener("click",promedio)

    function promedio(){
      listaNota.innerHTML="";
        let promedio=suma;
        let item = document.createElement("li");
        item.textContent ="el Promedio es de: "+promedio/totalNotas.length;
        listaNota.appendChild(item);
    }

    
    aplazos.addEventListener("click", aplazoss)
    function aplazoss(){
        listaNota.innerHTML="";
        for(i=0;i<totalNotas.length;i++){

            if(totalNotas[i]<3){
                let item = document.createElement("h1");
                item.textContent ="Debes repetir";
        listaNota.appendChild(item);
            }
        }
    }

    notaAlta.addEventListener("click",notaA)
    function notaA(){
        
        let mayor=0;
        listaNota.innerHTML="";
        for(i=0;i<totalNotas.length;i++){

            listaNota.innerHTML="";
            
             if(totalNotas[i]>mayor){
             mayor=totalNotas[i];
             item = document.createElement("li");
             item.textContent =mayor
             listaNota.appendChild(item);
             }
        }

    }