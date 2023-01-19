function Auto(){
    this.velocidad = 0;
    

    this.acelerar = function (num) {
        this.velocidad = this.velocidad + num
        return this.velocidad
    };

    this.frenar = function (num) {
        this.velocidad = this.velocidad - num
        if (this.velocidad < 0) {
            this.velocidad = 0
        }
        return this.velocidad
        
    }
}

const ferrari = new Auto();
console.log(ferrari.velocidad);
console.log(ferrari.acelerar(1));
console.log(ferrari.acelerar(2));
console.log(ferrari.velocidad);
console.log(ferrari.frenar(5));
console.log(ferrari.velocidad);