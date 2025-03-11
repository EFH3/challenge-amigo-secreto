let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim(); //trim elimina los espacios en blanco iniciales y finales

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
    } else {
        if (validarInput(nombreAmigo)) {
            amigos.push(nombreAmigo);
            limpiarCaja();
            document.getElementById("amigo").focus(); //Foco al input
            actualizarAmigo();
        }
    }
}

function actualizarAmigo (){
    let ulLista = document.getElementById('listaAmigos');
    ulLista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        ulLista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function validarInput(nombreAmigo) {
    let letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    let inputValido = false;

    if (letras.test(nombreAmigo)) {
        document.getElementById("mensaje").textContent = "✅ Entrada válida";
        inputValido = true;
    } else {
        document.getElementById("mensaje").textContent = "❌ Solo se permiten letras";
    }
    return inputValido;
}