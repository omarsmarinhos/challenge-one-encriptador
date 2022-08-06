let textoEntrada = document.getElementById('textoEntrada')
let textoSalida = document.getElementById('textoSalida')
const btnEncriptar = document.getElementById('encriptar')
const btnDesencriptar = document.getElementById('desencriptar')

btnEncriptar.addEventListener("click", () => {
    textoSalida.value =  encriptar(textoEntrada.value)
})
btnDesencriptar.addEventListener("click", () => {
    textoSalida.value = desincriptar(textoEntrada.value)
})





function encriptar(texto) {
    const arr = Array.from(texto)
    let textoEncriptado = ""
    arr.forEach(element => {
        textoEncriptado += letra(element)
    });
    return textoEncriptado
}

function letra(caracter) {
    if (caracter == "a") { 
        return "ai"
    } else if (caracter == "e") {
        return "enter"
    } else if (caracter == "i") {
        return "imes"
    } else if (caracter == "o") {
        return "ober"
    } else if (caracter == "u") {
        return "ufat"
    } else {
        return caracter;
    }
}

function encriptarRecursivo(texto) {
    
}

function desincriptar(texto) {
    if (texto.search("ai") != -1) {
        return desincriptar(texto.replace("ai", "a"))
    } else if (texto.search("enter") != -1) {
        return desincriptar(texto.replace("enter", "e"))
    } else if (texto.search("imes") != -1) {
        return desincriptar(texto.replace("imes", "i"))
    } else if (texto.search("ober") != -1) {
        return desincriptar(texto.replace("ober", "o"))
    } else if (texto.search("ufat") != -1) {
        return desincriptar(texto.replace("ufat", "u"))
    }else {
        return texto
    }
}




