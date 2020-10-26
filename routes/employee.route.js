'use strict';

const lib = require('../service/employee.service');
const employeeList = lib.getEmployeeList();
const express = require('express');
const router = express.Router();

/* GET employees listing. */
router.get('', function (req, res) {
    console.log('GET employees');
    // return res.send(DATABASE);
    return res.status(200).send({
        success: "true",
        message: "employees",
        employees: employeeList,
    });
});

/* GET employee by ID. */
router.get('/:id', function (req, res) {
    // return res.send(DATABASE);
    console.log('GET employee by ID where ID= ' + req.params.id);
    return res.status(200).send({
        success: "true",
        message: "employee",
        employee: lib.findEmployeeById(req.params.id, employeeList),
    });
});

/* DELETE employee by ID. */
router.delete('/:id', function (req, res) {
    console.log('DELETE employee by ID');
    const id = parseInt(req.params.id, 10);
    console.log(id)
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].id === id) {
            employeeList.splice(i, 1);
            return res.status(201).send({
                success: 'true',
                message: 'user deleted successfully'
            });
        }
    }
    return res.status(404).send({
        success: 'true',
        message: 'error in delete'
    });
});

/* POST add employee and give it a random _id and a _favJoke1 _favJoke2. */
router.post('/', function (req, res) {
    console.log(req.body)
    console.log('POST add employee');
    if (!req.body.firstName) {
        return res.status(400).send({
            success: "false",
            message: "first name is required",
        });
    } else if (!req.body.lastName) {
        return res.status(400).send({
            success: "false",
            message: "last name is required",
        });
    } else if (!req.body.hireDate) {
        return res.status(400).send({
            success: "false",
            message: "hire date is required",
        });
    } else if (!req.body.role) {
        return res.status(400).send({
            success: "false",
            message: "role is required",
        });
    }

    (async () => {
        let favoriteQuote = await lib.favoriteQuoteApi();
        let favoriteJoke = await lib.favoriteJokeApi();
        console.log('1' + favoriteQuote[0]);
        console.log(favoriteQuote);
        const employee = {
            id: employeeList.length + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            hireDate: req.body.hireDate,
            role: req.body.role,
            jokes: [favoriteQuote[0], favoriteJoke]
        };
        employeeList.push(employee);

        return res.status(201).send({
            success: "true",
            message: "user added successfully",
            employee,
        });
    })()

});

/* PUT when given employee id replace record. */
router.put('/:id', function (req, res) {
    console.log(req.params)
    const employeeFound = lib.findEmployeeById(req.params.id, employeeList)

    if (!employeeFound) {
        return res.status(404).send({
            success: 'false',
            message: 'user not found',
        });
    }

    const updatedEmployee = {
        id: req.params.id,
        firstName: req.body.firstName || employeeFound.body.firstName,
        lastName: req.body.lastName || employeeFound.body.lastName,
        hireDate: req.body.hireDate || employeeFound.body.hireDate,
        role: req.body.role || employeeFound.body.role,
    };

    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].id == req.params.id) {
            employeeList[i] = updatedEmployee;
            return res.status(201).send({
                success: 'true',
                message: 'employeeList updated successfully',
                updatedEmployee
            });
        }
    }
    return res.status(404).send({
        success: 'true',
        message: 'error in update'
    });
});


module.exports = router;
