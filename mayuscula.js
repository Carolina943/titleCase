/*Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas.
Asegúrate de que el resto de la palabra esté en minúsculas.Como propósito de este ejercicio,
debes también usar mayúsculas conectando palabras como the y of.*/

function titleCase(str) {
  let arr = [];
   let strN = str.toLocaleLowerCase().split(" ");
   for(let i =0; i< strN.length; i++){
     let newStr = strN[i];
     let result = strN[i].charAt(0).toLocaleUpperCase();
     arr.push(newStr.replace(newStr[0], result));
   }
    return arr.join(" ");
}
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
