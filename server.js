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
                    addNewDepartment();
                    break;

                case 'add a role':
                    addNewRole();
                    break;

                case 'add an employee':
                    addNewEmployee();
                    break;

                case 'Quit':
                    quit();
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
function addNewDepartment(){
    inquirer.prompt ([
        {
            type: 'input',
            name: 'deptname',
            messege: 'input the department name'
        }
    ]).then(function(res){

        const sql = 'INSERT INTO department SET ?';
        params = {name: res.deptname};
        db.query(sql , params, (err) => {
            if (err) throw err 
            console.table(res);
            askQuestions();
        })
    })
};

function addNewRole(){
    inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            messege: 'type the new role name'
        },
        {
            type: 'input',
            name: 'salary',
            messege: 'enter the salary'
        }
    ]).then(function(res){
        const sql = 'INSERT INTO role SET ?';
        params = { 
                    title: res.title,
                    salary: res.salary                  
                 };
        db.query(sql , params, (err) => {
            if (err) throw err 
            console.table(res);
            askQuestions();
        })
    })
};
let roleArray = [];
function selectRole() {
    const sql = 'SELECT title FROM role';
    db.query(sql,(err,res) => {
        for (let i = 0; i<res.length ; i++){
            roleArray.push(res[i].title)
        }
    });
    return roleArray;
}
function addNewEmployee(){
    inquirer.prompt ([
        {
            type: 'input',
            name: 'firstname',
            messege: 'type the firstname'
        },
        {
            type: 'input',
            name: 'lastname',
            messege: 'type the lastname'
        },
        {
            type: 'list',
            name: 'role',
            messege: 'employee role',
            choices: selectRole(),
        }
    ]).then(function(res){
        let roleId = selectRole().indexOf(res.role);

        const sql = 'INSERT INTO employee SET ?';
        params = { 
                    first_name: res.firstname,
                    last_name: res.lastname ,
                    role_id: roleId           
                 };
        db.query(sql , params, (err) => {
            if (err) throw err 
            console.table(res);
            askQuestions();
        })
    })
};

function quit() {
    db.end();
};