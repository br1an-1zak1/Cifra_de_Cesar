"use strict"

const button = document.querySelector("button");

button.addEventListener("click", () =>{
  const texto = document.querySelector("#texto").value;
  // console.log(cifrar(texto)); 

  document.getElementById("txtCifrado").value = cifrar(texto);
} );


function cifrar(pTexto){
  let unicodeArray = [];
  let cifrado = [];
  for(let i = 0; i <= pTexto.length -1; i++){
    let fragmento =  String(pTexto).toUpperCase().charCodeAt(i);
    unicodeArray.push(fragmento);
  };

  unicodeArray = unicodeArray.map((unicode) => {
    if(!((90 == unicode) || (89 == unicode) || (88 == unicode))){ //nor
      return unicode + 3;
    }else{
      return unicode -= 23;
    }
  });

  for(let i = 0; i <= unicodeArray.length - 1; i++ ){
    cifrado.push(String.fromCharCode(unicodeArray[i]));
  }

  return cifrado.join('');
};


