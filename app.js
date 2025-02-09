// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//let lista = [];
function agregarAmigo(){
    let textoIngresado = document.getElementById('amigo').value;
    if (textoIngresado == ''){
        alert('Por favor, ingresar un nombre válido');
    } else {
        //console.log(textoIngresado);
        amigos.push(textoIngresado);
        //console.log(amigos);
        limpiarCaja();
    }
    ActualizarListaAmigos('listaAmigos');
}
function sortearAmigo(){
    if (amigos.length == 0){
        alert("Esta vacía la lista");
    } else {
      let indiceAleatorio = Math.floor(Math.random()*amigos.length)+1;
      let NombreAleatorio = amigos[indiceAleatorio];
     //  console.log(indiceAleatorio);
     //  console.log(NombreAleatorio);
     let lista = document.getElementById("listaAmigos");
     lista.innerHTML = "";
      let amigoSecreto = document.getElementById('resultado');
      amigoSecreto.innerHTML = "Tu amigo secreto es: " + NombreAleatorio;
      amigos = [];
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}
function ActualizarListaAmigos(id){
    let lista = document.getElementById(id);
    lista.innerHTML = "";
    //lista.innerHTML = texto;
    //console.log(lista);
    for (let i = 0; i < amigos.length; i++){
        let amigoPantalla = document.createElement("li");
        amigoPantalla.textContent = amigos[i];
        lista.appendChild(amigoPantalla);
    }
}
