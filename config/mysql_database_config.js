const mysql = require('mysql2');

var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'abc12345',
    database: 'demo_database'
});

const databaseConnection = () => {
    mysqlConnection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

module.exports = {databaseConnection, mysqlConnection}