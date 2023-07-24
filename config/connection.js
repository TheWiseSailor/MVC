//TA's said we could just copy and paste one of the connection.js's for this assignment.
//this imports the sequelize for mysql database
const Sequelize = require("sequelize");
//loads the enviroment variables
require("dotenv").config();
// declares database connection variable
let sequelize;
//checks if its using cloud or local database
if (process.env.JAWSDB_URL) {
  //creates sequelize instaance with local database config
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}
//exports the sequelize instance
module.exports = sequelize;
