const textArea=document.querySelector(".textarea")
const mensaje=document.querySelector(".mensaje")

function encriptar(stringEncriptada){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()
    for(let i=0;i<matrizcodigo.length;i++){
        if (stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])    
        }
    }
}

function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value)
    mensaje.value=textoEncriptado;  
}