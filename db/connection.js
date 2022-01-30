const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Cisco001',
      database: 'employeedb'
    },
    console.log('Connected to the employee database.')
);

module.exports = db;