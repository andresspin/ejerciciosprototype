//Funcion prototipo para agregar varios metodos

Function.prototype.method = function (name,func) {
        this.prototype[name] = func;   
}

Function.prototype

String.method('palindrome',function () {
    let minusc  = this.toLowerCase();
    let sinesp  = minusc.replace(/\s+/g, '');
    let arreglo = sinesp.split("")
    let reves   = arreglo.reverse();
    
   

    return sinesp == arreglo.join("")?true:false
});

console.log("Anita lava la Tina".palindrome());
console.log("Prueba".palindrome());
console.log("Oso  ".palindrome());
console.log("  correr".palindrome());