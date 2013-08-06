var pg = require('pg').native;
var conString = process.env.DATABASE_URL || "postgres://localhost/seatbelt";

var client = new pg.Client(conString);
client.connect(function(error) {
    console.log(error);
});

exports.save = function(email_address, callback) {
        console.log(email_address);
        var query = client.query("SELECT email FROM contact WHERE email = $1", [email_address]);

        query.on('end', function(result) {
            if (!result.rows.length) {
                console.log('Insert new address');
                client.query('INSERT INTO contact VALUES ($1)', [email_address]);
            }
        });
};