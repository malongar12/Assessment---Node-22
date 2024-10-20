"use strict";
/** Database setup for jobly. */
//const { Client } = require("pg");
//const { getDatabaseUri } = require("./config");


/*if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri()
  });
}
*/
const Pool = require("pg").Pool



const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "jobly",
    password: "malongar12",
    //port: 2208
    port: 5432,

});



db.connect();

module.exports = db;