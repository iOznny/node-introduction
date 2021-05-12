const deadpool = {
    name: 'Wade',
    lastname: 'Winston',
    power: 'Regeneración',
    getName: function() {
        return `${ this.name } ${  this.lastname } ${ this.power }`;
    }
};

//console.log(deadpool.getName());

/* const name = deadpool.name;
const lastname = deadpool.lastname;
const power = deadpool.power; */

//const { name, lastname, power } = heroe;
//console.log(name, lastname, power);

function imprimeHeroe({name, lastname, power}) { 
    console.log(name, lastname, power);
}

imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];
/* const h1 = heroes[0];
console.log(h1); */


const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);




