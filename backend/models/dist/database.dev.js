"use strict";

var dbConfig = require("../config/db.config");

var Sequelize = require("sequelize");

var sequelize = new Sequelize(process.env.DATABASE_SCHEMA || "postgres", process.env.DATABASE_USERNAME || "postgres", process.env.DATABASE_PASSWORD || "postgres", {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: dbConfig.dialectOptions.ssl
  },
  define: {
    timestamps: dbConfig.define.timestamps
  }
});
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
/* Define user table */

db.User = require("./user.model")(sequelize, Sequelize);
/* Define property table */

db.Property = require("./property.model")(sequelize, Sequelize);
/* Relate property with user */

db.User.hasMany(db.Property);
db.Property.belongsTo(db.User);
module.exports = db;