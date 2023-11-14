import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "plataforma_cursos",
  username: "costa",
  password: "guga20022002",
  define: {
    underscored: true, //definir padrão para camelCase na aplicação (converte para camelcase)
  },
});
