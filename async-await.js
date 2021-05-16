const employees = [
    {
        id: 1,
        name: 'Demo1'
    },
    {
        id: 2,
        name: 'Demo2'
    },
    {
        id: 3,
        name: 'Demo3'
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

const getEmploye = (id) => {

    return new Promise((resolve, reject ) => {
        const employee = employees.find(e => e.id === id)?.name;
        (employee) ? resolve(employee) : reject(`No existe un empleado con el id: `, id);
    });
}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salarys.find(s => s.id === id)?.salary;
        (salary) ? resolve(salary) : reject(`No existe un salario con el id: `, id);
    });
}

// Async y Await.

const getInfoUser = async(id) => {
    try {
        const employe = await getEmploye(id);
        const salary = await getSalary(id);
        
        return `El salario del empleado: ${ employe } es de: $${ salary }`;
    } catch (error) {
        return error;        
    }
}

const id = 10;

getInfoUser(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

