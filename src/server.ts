import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';

import swaggerUi from "swagger-ui-express";
import cors from "cors";

import "reflect-metadata";

import { AppError } from "./errors/AppError";
import { router } from "./routes";

import swaggerFile from "./swagger.json";

import "./shared/container";

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// config cors

app.use(router)
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


app.listen(3000, () => console.log("aplicação rodando na porta 3000\nlink para o swagger: http://localhost:3000/api-docs/"));
