
    function Persona(nombre, peso, altura) {
            this.nombre = nombre;
            this.peso = peso;
            this.altura = altura;
           
            this.saludar=  function(str) {
                return `Hola ${str} me llamo ${this.nombre}`
            };

            this.bmi = function () {
            return `${this.peso * (this.altura ^ 2)}`
        };

    }



let andres = new Persona ('Andres',70,180)
console.log(andres.saludar("Luisa"));
console.log(andres.bmi());