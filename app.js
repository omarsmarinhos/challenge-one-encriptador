let textoEntrada = document.getElementById('textoEntrada')
let textoSalida = document.getElementById('textoSalida')
const btnEncriptar = document.getElementById('encriptar')
const btnDesencriptar = document.getElementById('desencriptar')
const btnCopiar = document.getElementById('copiar')

btnEncriptar.addEventListener("click", () => {
    if(validarMayuscula(textoEntrada.value)) {
        textoSalida.value = encriptar(textoEntrada.value)
        mostrar()
    } else {
        ocultar()
    }
})

btnDesencriptar.addEventListener("click", () => {
    if(validarMayuscula(textoEntrada.value)) {
        textoSalida.value = desincriptar(textoEntrada.value)
        mostrar()
    } else {
        ocultar()
    }
})

btnCopiar.addEventListener("click", copiar)

function encriptar(texto) {
    return texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
}

function desincriptar(texto) {
    return texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u")
}

function validarMayuscula(texto) {
    const arr = texto.split(" ")
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i].charAt(j) === arr[i].charAt(j).toUpperCase()) {
                return false;
            }
        } 
    }
    return true;
}

function copiar(){
    textoSalida.select();
    navigator.clipboard.writeText(textoSalida.value);
}

function mostrar() {
    textoEntrada.value = ""
    document.querySelector('.salida > img').style.display = "none";
    document.querySelector('.retroalimentacion').style.display = "none";
    textoSalida.style.display = "block"
    btnCopiar.style.display = "inherit"
}

function ocultar() {
    document.querySelector('.retroalimentacion').style.display = "flex";
    if (screen.width >= 1024) {
        document.querySelector('.salida > img').style.display = "block";
    } else {
        document.querySelector('.salida > img').style.display = "none";
    }
    textoSalida.style.display = "none"
    btnCopiar.style.display = "none"
    document.getElementById('mensaje2').innerHTML = "<strong>No se permite letras mayúsculas o caracteres especiales</strong>"
}





