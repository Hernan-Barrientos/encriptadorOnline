const inputTexto = document.querySelector(".texto");
//const mensaje = document.querySelector(".texto2");
const mensaje = document.querySelector("#cuadradoDerecha");

//if(inputTexto.textContent==""){crearImagenDerecha();}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    crearTextareaDerecha();
//  eliminarImagenDerecha();
} 

function btnDesencriptar(){
    const textoEncriptadoBis = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptadoBis;
    crearTextareaDerecha();
} 

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigoBis = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizCodigoBis.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigoBis[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigoBis[i][0],matrizCodigoBis[i][1])
        }
    }
    return StringParaDesencriptar;
}

    const $mivariable = document.getElementById("cuadradoDerecha");

    function crearTextareaDerecha(){/*esta function tiene que extraer el valor ingresado en el input para mostrarlo como una string dentro del <Textarea id="textoFuerte"> y sobreescribir el valor dentro del mismo */
    const valorDelTextarea = document.getElementById("textoEnTextarea");
   
    var cajitaTextoD = document.createElement("textarea");
    cajitaTextoD.className = "texto2";
    cajitaTextoD.id="texto2";
    cajitaTextoD.value=mensaje.value;
    
   
    valorDelTextarea.textContent=mensaje.value;
    }
    



function crearImagenDerecha(){
    
    munheco = document.createElement("img");
    munheco.src = "Munheco.png";
    munheco.alt = "Logo Javascript";
    munheco.className = "munheco";
    munheco.id = "munhequito"
    
    const contenedor = document.getElementById("cuadradoDerecha");
    contenedor.prepend(munheco);
    }
