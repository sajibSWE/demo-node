import { Sequelize } from "sequelize";

const sequelize = new Sequelize("test", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres", // Using PostgreSQL
});

export default sequelize;
