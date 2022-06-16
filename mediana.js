let listaMediana = [];

function AddNumberMediana(){
    let numerosmediana = document.getElementById("numerosMediana");
    let newNumber = Number(numerosmediana.value);

    listaMediana.push(newNumber);


    const showListMediana = document.getElementById("listMediana");
    showListMediana.innerText = listaMediana;

    document.getElementById('numerosMediana').value= null;
}

function CalcularMediana(){
    
    //primero se ordena la lista
    let listaMedianaOrdenada = listaMediana.sort(
        function (elementoAmediana, elementoBmediana){
            return elementoAmediana - elementoBmediana;
        }
    );

    //se determina la mitad de la lista
    let mitadListaMediana = parseInt(listaMedianaOrdenada.length /2);
    
    if(listaMedianaOrdenada.length % 2 === 0){
        let elemento1 = listaMedianaOrdenada[mitadListaMediana - 1];
        let elemento2 = listaMedianaOrdenada[mitadListaMediana];
        
        let promedioElem1YElem2 = Number((elemento1+elemento2)/2);
        mediana = promedioElem1YElem2;
    
    }else{
        mediana = listaMedianaOrdenada[mitadListaMediana];
    }

    const resultMediana = document.getElementById("mediana");
    resultMediana.innerText = `La Lista ordenada es ${listaMedianaOrdenada} y la mediana es ${mediana}`;
}


//el reto de este es integrarlo con html como siempre, 
// además debemos ordenar los datos de mayor a menor con .sort - hecho