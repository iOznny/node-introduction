console.log('Inicio');

//Callback: Es una función que se manda como
// argumento dentro de otra función.

setTimeout(() => {
    console.log('Primer timeout');
}, 3000);

setTimeout(() => {
    console.log('Segundo timeout');
}, 0);

setTimeout(() => {
    console.log('Tercero timeout');
}, 0);

console.log('Fin');