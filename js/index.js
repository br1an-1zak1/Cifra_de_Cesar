"use strict"

const btnEncript = document.querySelector("#encript");
const btnDescript = document.querySelector("#descript");

btnEncript.addEventListener("click", () =>{
  handleCripto('C');
} );

btnDescript.addEventListener("click", () =>{
  handleCripto('D');
} );


function handleCripto(type){
  const texto = document.querySelector("#texto").value;
  const valor = document.querySelector("#valor").value;
  
  texto && valor 
    ? document.getElementById("txtCifrado").value = criptografia(texto, valor, type)
    : alert('Faltou preencher um campo');
}


function criptografia(texto, valor, tipo){
  const unicode = [];
  
  // in pega valores de propriedades
  // of pega valores de objetos iteraveis
  tipo != 'C' ? valor *= -1 : valor = parseInt(valor);
  
  for (let letra of texto){
    unicode.push(letra.charCodeAt() + valor);
  };
  
  const resultado = unicode.map(letra => {
    return String.fromCharCode(letra);
  }).join(''); 

  return resultado;
}

// PRIMEIRA FUNÇÃO DE TESTE
// function criptografia(pTexto){
//   let unicodeArray = [];
//   let cifrado = [];
//   for(let i = 0; i <= pTexto.length -1; i++){
//     let fragmento =  String(pTexto).toUpperCase().charCodeAt(i);
//     unicodeArray.push(fragmento);
//   };

//   unicodeArray = unicodeArray.map((unicode) => {
//     if(!((90 == unicode) || (89 == unicode) || (88 == unicode))){ //nor
//       return unicode + 3;
//     }else{
//       return unicode -= 23;
//     }
//   });

//   for(let i = 0; i <= unicodeArray.length - 1; i++ ){
//     cifrado.push(String.fromCharCode(unicodeArray[i]));
//   }

//   return cifrado.join('');
// };