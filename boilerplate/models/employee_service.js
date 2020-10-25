const axios = require('axios');

const getEmployeeList = () =>  {
    console.log('employeeList WOO');
    return [
        {
            id: 1,
            firstName: 'frank',
            lastName: 'shankley',
            hireDate: '1/2/2018',
            role: 'CFO',
            jokes: ['joke1', 'joke2', 'joke3'],
        },
        {
            id: 2,
            firstName: 'joe',
            lastName: 'jacobs',
            hireDate: '1/2/2018',
            role: 'CEO',
            jokes: ['joke1', 'joke2', 'joke3'],
        }
    ]
}

const findEmployeeById = (id, employeeList) => {
    console.log('findEmployeeById ' + id);
    const employeeFound = employeeList.filter((employee) => {
        if (employee.id == id) {
            return employee
        }
    });
    if (employeeFound.length > 0) {
        console.log('employeeFound...')
        return employeeFound
    }
    return false;
}

const deleteEmployeeById = (id) => {
    console.log('deleteEmployeeById ' + id);
    const newEmployeeList = getEmployeeList().splice(id, 1);
    this.getEmployeeList = newEmployeeList;
    return newEmployeeList;
}

async function favoriteJokeApi() {
    const config = {
        method: 'get',
        url: 'https://icanhazdadjoke.com/',
        headers: {
            "Accept": "application/json"
        }
    }
    let res = await axios(config)
    return res.data['joke'];
}

async function favoriteQuoteApi() {
    try {
        const {data:response} = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes') //use data destructuring to get data from the promise object
        return response
    }

    catch (error) {
        console.log(error);
    }
}
module.exports = { favoriteJokeApi, favoriteQuoteApi, findEmployeeById, getEmployeeList, deleteEmployeeById}


