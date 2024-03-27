var express = require('express');
const { mysqlConnection } = require('../config/mysql_database_config');
var router = express.Router();

/* GET users listing. */
router.get('/get', function (req, res, next) {
    const selectQuery = "SELECT * FROM employee";
    try {
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
});

router.post('/add', (req, res) => {
    const {id, name, role} = req.body;
    const addQuery = `INSERT INTO employee (id, name, role) VALUES('${id}','${name}', '${role}')`;
    
    try {
        mysqlConnection.query(addQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result)
            console.log('Add Complete!');
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
})

router.post('/update', async (req, res) => {
    const {id, name, role} = req.body;
    const updateQuery = `
        UPDATE employee
        SET name = '${name}', role = '${role}'
        WHERE id = '${id}'
    `;

    try {
        mysqlConnection.query(updateQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result)
            console.log('Update Complete!');
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
})

router.delete('/delete', async (req, res) => {
    const {id} = req.body;
    const deleteQuery = `DELETE FROM employee WHERE id='${id}';`

    try {
        mysqlConnection.query(deleteQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result)
            console.log('Delete Complete!');
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
})

module.exports = router;