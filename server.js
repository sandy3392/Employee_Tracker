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
  });