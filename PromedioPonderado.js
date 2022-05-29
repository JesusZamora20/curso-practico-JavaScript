const listaPromedioPonderado = [];

function NuevaNota(nota,peso){
    this.nota = nota;
    this.peso = peso;
}

function AnadirPesoYNota(){
    let calificacion = document.getElementById("nota");
    let calificacionvalor = Number(calificacion.value);

    let pesoNota = document.getElementById("peso");
    let pesoNotaValor = Number(pesoNota.value);

    listaPromedioPonderado.push(new NuevaNota(calificacionvalor,pesoNotaValor));

    const showListNota = document.getElementById("listaNota");
    showListNota.innerText = listaPromedioPonderado.map(
        function (lista){
            return lista.nota;
        }
    );

    const showListPeso = document.getElementById("listaPeso");
    showListPeso.innerText = listaPromedioPonderado.map(
        function (lista){
            return lista.peso;
        }
    );


    document.getElementById("nota").value= null;
    document.getElementById("peso").value= null;

}




/* el programa debe: 
- verificar que los arreglos de nota y peso de nota tengan el mismo tamaño
- verificar que ninguna nota sea mayor de 10 y menor que 0 */



