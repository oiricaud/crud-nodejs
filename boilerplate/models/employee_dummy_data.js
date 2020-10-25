export const getEmployeeList = () =>  {
    console.log('employeeList WOO');
    return [
        {
            id: 1,
            firstName: 'oscar',
            lastName: 'ricaud',
            hireDate: '1/2/2018',
            jokes: ['joke1', 'joke2', 'joke3'],
        },
        {
            id: 2,
            firstName: 'oscar',
            lastName: 'ricaud',
            hireDate: '1/2/2018',
            jokes: ['joke1', 'joke2', 'joke3'],
        }
    ]
}


export const findEmployeeById = (id) =>{
    const employees = getEmployeeList()
    const employeeFound = employees.filter((employee) => {
        if (employee.id === id) {
            return employee
        }
    });
    if(employeeFound.length>0){
        return employeeFound
    }
    return false

}
