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
    const promesa = new Promise((resolve, reject ) => {
        const employee = employees.find(e => e .id === id)?.name;

        if (employee) {
            
        }


    });
  
}

getEmploye(1)
    .then(employe => console.log(employe));