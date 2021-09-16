require('dotenv').config();

module.exports ={
  "development": {
    "username": "polzovatel",
    "password": null,
    "database": "final",
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
