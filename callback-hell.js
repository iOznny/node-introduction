const employees = [
    {
        id: 1,
        name: 'Demo'
    },
    {
        id: 2,
        name: 'Demo'
    },
    {
        id: 3,
        name: 'Demo'
    }
];

const salarys = [
    {
        id: 1,
        salary: 2000
    },
    {
        id: 2,
        salary: 1500
    }
];

const getEmploye = (id, callback) => {
    const employe = employees.find(e => e .id === id)?.name;

    if (employe) {
        callback(null, employe);
    } else {
        callback(`El empleado con el id ${ id } no existe.`);
    }
}

const getSalary = (id, callback) => {
    const salary = salarys.find(e => e .id === id)?.salary;

    if (salary) {
        callback(null, salary);
    } else {
        callback(`El empleado con el id ${ id } no tiene salario.`);
    }
}


const id = 3;

getEmploye(id, (error, employe) => {
    if (error) {
        console.log('ERROR!');        
        return console.log(error);
    } 
            
    getSalary(id, (error, salary) => {
        if (error) {                        
            return console.log(error);
        } 
        
        console.log('El empleado:', employe, 'tiene un salario de: $', salary);        
    });
});
