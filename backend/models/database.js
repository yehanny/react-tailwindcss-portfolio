const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_SCHEMA || "postgres", process.env.DATABASE_USERNAME || "postgres", process.env.DATABASE_PASSWORD || "postgres", {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: dbConfig.dialectOptions.ssl,
  },
  define: {
    timestamps: dbConfig.define.timestamps,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/* Define user table */
db.User = require("./user.model")(sequelize, Sequelize);

module.exports = db;
