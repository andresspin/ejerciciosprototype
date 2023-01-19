//Funcion prototipo para agregar varios metodos

Function.prototype.method = function (name,func) {
        this.prototype[name] = func;   
}

String.method('palindrome',function () {
    let arreglo = this.split("");
    let reves   = arreglo.reverse();

    return this == reves.join("")?true:false
});

console.log("ana".palindrome());
console.log("prueba".palindrome());