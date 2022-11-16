import { Request, Response } from "express"
import { container } from "tsyringe";
import { CriarModuloUseCase } from "./CriarModuloUseCase";

class CriarModuloController {
  async handle(request: Request, response: Response) {
    const { nome, exemplo } = request.body;

    const criarModuloUseCase = container.resolve(CriarModuloUseCase);

    const criar = await criarModuloUseCase.execute({ nome, exemplo });

    if (criar) {
      return response.status(201).send();
    }
    else {
      return response.status(400).json({ error: "Modulo já cadastrado" });
    }

  }
}

export { CriarModuloController };