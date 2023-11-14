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
        grey100: "#0066ff",
        grey80: "#0066ff",
        grey60: "#0066ff",
        grey40: "#0066ff",
        grey20: "#0066ff",
        filterBg: "blue",
        accent: "blue",
        hoverBg: "blue",
        white100: "blue",
      },
    },
  },
});

export const adminJsRouter = AdminJSexpress.buildRouter(adminJs);
