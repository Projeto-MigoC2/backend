import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeletarModuloUseCase } from "./DeletarModuloUseCase";

class DeletarModuloController {
  async handle(request: Request, response: Response) {
    const { nome } = request.body;

    const deletarModuloUseCase = container.resolve(DeletarModuloUseCase);

    const apagar = await deletarModuloUseCase.execute({ nome });

    if (apagar) {
      return response.status(200).send();
    }
    else {
      return response.status(404).json({ error: "Modulo não encontrado" });
    }
  }
}

export { DeletarModuloController };