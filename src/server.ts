import express from "express";
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";

const app = express();

app.use(express.static("public"));

//app.use (caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    //authenticate faz uma querry qualquer e verifica se a conexão funcionou
    console.log("Conexão com banco de dados foi bem sucedida");
  });
  console.log(`Server iniciado com sucesso na porta ${PORT}`);
});
