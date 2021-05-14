// El callback es una función que se va a 
// ejecutar eventualmente cuando sea su momento de ejecución
// Es una función que se manda como argumento.

setTimeout(() => {
    console.log('Hola Mundo');
}, 100);


const getUserById = (id, callback) => {
    const user = {
        id,
        name: 'Demo'
    }

    setTimeout(() => {
        callback(user)
    }, 1500);

}

getUserById(10, (user) => {
    console.log(user);
});