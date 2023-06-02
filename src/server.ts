import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import "reflect-metadata";

import { AppDataSource } from "./DockerDataSource";
import { router } from "./routes";

import swaggerFile from "./swagger.json";

import "./shared/container";
import { AppError } from "./errors/AppError";

// AppDataSource.initialize()
//   .then(() => {
//     console.log("Conexão com o banco de dados bem sucedida!");
//   })
//   .catch((err) => {
//     console.error(" Conexão com o banco de dados falhou ", err)
//   })

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {


    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server error ${err.message}`,
    });
  }
);

app.use(router)

app.listen(3000, () => console.log("aplicação rodando na porta 3000\nlink para o swagger: http://localhost:3000/api-docs/"));
