var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'partner',
    password: 'algeria',
    database: 'dz',
})

connection.connect(function(err) {
    if (err)
        console.log("Server mysql non disponible")

});




module.exports = connection