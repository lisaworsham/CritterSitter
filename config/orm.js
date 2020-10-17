// Import MySQL connection.
cosnt connection = require("../config/connection.js");

const orm = {
    selectUser: function (tableInput, email, cb) {
        let queryString = "SELECT * FROM " + tableInput + " WHERE Email = " + email + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb (result)
        });
    }
};

module.exports = orm