class Complex {
    constructor (real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
        console.log(this.real + "+" + this.imaginary + "i");
    }

}

let c1 = new Complex(2, 5);
let c2 = new Complex(10, 3);

c1.add(c2);