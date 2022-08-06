import express from "express";
import { Assunto } from "./modules/materia/entities/assunto";
import { AppDataSource } from "./DockerDataSource";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/", (req, res) => {

  // const { body } = req;

  // const { name } = body;

  // const assunto = new Assunto;
  // assunto.name = name;
  res.json({ message: "Hello World" });
})

app.listen(3000, () => console.log("aplicação rodando na porta 3000"));
