const axios = require('axios');

/**
 * Method is responsible for mocking a record of employees
 * @returns An array of Employees
 */
const getEmployeeList = () => {
    return [
        {
            id: 1,
            firstName: 'frank',
            lastName: 'shankley',
            hireDate: '1/2/2018',
            role: 'CFO',
            jokes: ['joke1', 'joke2', 'joke3'],
            //jokes: ['Veganism is the sad result of a morally corrupt mind. Reconsider your life.', 'How many apples grow on a tree? All of them!'],
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

/**
 * Method is responsible for retrieving found employee given an ID and the employee list
 * @param id The unique ID identifier for employee
 * @param employeeList is the Employee List which contains employee information
 * @returns {boolean|*} found employee, false if employee does not exist
 */
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
/**
 * Method is responsible for finding an employee given an ID and removing this employee from the list
 * @param id The unique ID identifier for employee
 * @returns Updated employeeList with removed employee
 */
const deleteEmployeeById = (id) => {
    console.log('deleteEmployeeById ' + id);
    const newEmployeeList = getEmployeeList().splice(id, 1);
    this.getEmployeeList = newEmployeeList;
    return newEmployeeList;
}

/**
 * Method is responsible for calling an external REST API endpoint to mock an employee's favorite joke
 * @returns A random joke
 */
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

/**
 * Method is responsible for calling an external REST API endpoint to mock an employee's favorite quote
 * @returns A random quote
 */
async function favoriteQuoteApi() {
    try {
        const {data: response} = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes') //use data destructuring to get data from the promise object
        return response
    } catch (error) {
        console.log(error);
    }
}

module.exports = {favoriteJokeApi, favoriteQuoteApi, findEmployeeById, getEmployeeList, deleteEmployeeById}


