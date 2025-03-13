let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
    } else {
        if (validarInput(nombreAmigo)) {
            amigos.push(nombreAmigo);
            limpiarCaja();
            document.getElementById("amigo").focus();
            actualizarAmigo();
        }
    }
    return;
}

function actualizarAmigo (){
    let ulLista = document.getElementById('listaAmigos');
    ulLista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        ulLista.innerHTML += `<li>${amigos[i]}</li>`;
    }
    return;
}

function sortearAmigo() {
    
    if (amigos.length === 0){
        alert('Debes ingresar los nombres correspondientes.')
    } else{
        eliminarNombresDuplicados();
        let numeroGenerado = Math.floor(Math.random()*amigos.length);

        let liResultado = document.getElementById('resultado');
        liResultado.innerHTML = amigos[numeroGenerado];
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function validarInput(nombreAmigo) {
    let letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    let inputValido = false;

    if (letras.test(nombreAmigo)) {
        document.getElementById("mensaje").textContent = "✅ Entrada válida";
        inputValido = true;
    } else {
        document.getElementById("mensaje").textContent = "❌ Solo se permiten letras";
    }
    return inputValido;
}

function nombresDuplicados(lista) {
    return new Set(lista).size !== lista.length;
}

function eliminarNombresDuplicados() {
    if (nombresDuplicados(amigos)) {
        let confirmacion = confirm('Contienes nombres duplicados en la lista, ¿Deseas eliminarlos?');
        if (confirmacion) {
            amigos = [...new Set(amigos)];
            alert("Nombres eliminados");
            actualizarAmigo();
            console.log(amigos);
        } else {
            alert("Operación cancelada");
        }
    }
}

document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        agregarAmigo();
    }
});