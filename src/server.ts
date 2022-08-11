import express from "express";

import { AppDataSource } from "./DockerDataSource";
import { router } from "./routes";
import "./shared/container";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

const app = express();

app.use(express.json());

app.use(router)

app.listen(3000, () => console.log("aplicação rodando na porta 3000"));
