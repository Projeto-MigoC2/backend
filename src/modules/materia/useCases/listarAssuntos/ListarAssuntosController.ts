import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListarAssuntosUseCase } from "./ListarAssuntosUseCase";

class ListarAssuntoController {
  async handle(request: Request, response: Response) {
    const listarAssuntosUseCase = container.resolve(ListarAssuntosUseCase);

    const assuntos = await listarAssuntosUseCase.execute();

    return response.status(200).json(assuntos);
  }
}

export { ListarAssuntoController };