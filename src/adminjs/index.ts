import AdminJS from "adminjs";
import AdminJSexpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminjsResources } from "./resources";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminjsResources,
  branding: {
    companyName: "Plataforma",
    logo: "/logoCurso.png",
    theme: {
      colors: {
        primary100: "blue",
        primary80: "blue",
        primary60: "blue",
        primary40: "blue",
        primary20: "blue",
        grey100: "#151515",
        grey80: "#333333",
        grey60: "#4d4d4d",
        grey40: "#666666",
        grey20: "#dddddd",
        filterBg: "#333333",
        accent: "#151515",
        hoverBg: "#151515",
      },
    },
  },
});

export const adminJsRouter = AdminJSexpress.buildRouter(adminJs);
