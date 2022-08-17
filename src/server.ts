import express from "express";

import { AppDataSource } from "./DockerDataSource";
import { router } from "./routes";
import "./shared/container";

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados bem sucedida!");
  })
  .catch((err) => {
    console.error(" Conexão com o banco de dados falhou ", err)
  })

const app = express();

app.use(express.json());

app.use(router)

app.listen(3000, () => console.log("aplicação rodando na porta 3000"));
