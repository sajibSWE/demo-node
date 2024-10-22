import { Sequelize } from "sequelize";

const sequelize = new Sequelize("test", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres", // Using PostgreSQL
  logging: console.log,
});

export default sequelize;
