const db = require('./db/connection');
//requiring inquirer from npm package
const inquirer = require('inquirer');
//requiring console tabel from npm package
const cTable = require('console.table');

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    // call the inquirer here and start executing logic
    askQuestions();
});

// view all departments, 
// view all roles, 
// view all employees,
// add a department, 
// add a role,
// add an employee, 
// update an employee role
// exit the application

function askQuestions() {
    inquirer.prompt([
        {
          type: 'list',
          name: 'option',
          message: 'Welcome to the Employee Database of our Company',
          choices: ['view all departments',
                    'view all roles', 
                    'view all employees',
                    'add a department', 
                    'add a role',
                    'add an employee', 
                    'update an employee role',
                    'Quit'
                    ]
        }
    ]).then(function (res) {
            switch (res.option){
                case 'view all departments':
                    viewDepartments();
                    break;
                
                case 'view all roles':
                    viewRoles();
                    break;
                
                case 'view all employees':
                    viewEmployees();
                    break;
                
                case 'add a department':
                    addDepartment();
                    break;

                case 'add a role':
                    addNewRole();
                    break;

                case 'add an employee':
                    addNewEmployee();
                    break;


            }
        })
    };

function viewDepartments() {
    const sql = 'SELECT * FROM department';
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        askQuestions();
    })
};

function viewRoles() {
    const sql = 'SELECT * FROM role';
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        askQuestions();
    })
};

function viewEmployees() {
    const sql = 'SELECT * FROM employee';
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        askQuestions();
    })
};