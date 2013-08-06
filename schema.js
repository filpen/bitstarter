var pg = require('pg').native
  , connectionString = process.env.DATABASE_URL || 'postgres://localhost/seatbelt'
  , client
  , query;

client = new pg.Client(connectionString);
client.connect();
query = client.query('CREATE TABLE contact (email varchar(254))');
query.on('end', function() { client.end(); });