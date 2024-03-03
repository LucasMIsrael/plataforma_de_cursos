// src/adminjs/resources/user.ts

import { ResourceOptions } from "adminjs";

const userResourceOptions: ResourceOptions = {
  navigation: "Administração",
  properties: {
    birth: {
      type: "date",
    },
    password: {
      type: "password",
    },
    role: {
      availableValues: [
        //campo de select, value é o que vem pro back e label o que vai aparecer pro usuário
        { value: "admin", label: "Administrador" },
        { value: "user", label: "Usuário Padrão" },
      ],
    },
  },
  editProperties: ["firstName", "lastName", "phone", "birth", "email", "password", "role"],
  filterProperties: ["firstName", "lastName", "phone", "birth", "email", "role", "createdAt", "updatedAt"],
  listProperties: ["id", "firstName", "email", "role"],
  showProperties: ["id", "firstName", "lastName", "phone", "birth", "email", "role", "createdAt", "updatedAt"],
};

export { userResourceOptions };
