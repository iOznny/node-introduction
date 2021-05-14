function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 10));

const sumar2 = (a, b = 30) => {
    return a + b;
}
console.log(sumar2(10));

const sumar3 = (a, b) => a + b;
console.log(sumar3(10, 20));

const saludar = () => 'Hola Mundo';
console.log(saludar());
