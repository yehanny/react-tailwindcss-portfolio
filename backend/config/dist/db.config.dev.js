"use strict";

module.exports = {
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: process.env.DATABASE_SSL === "true"
  },
  define: {
    timestamps: false
  }
};