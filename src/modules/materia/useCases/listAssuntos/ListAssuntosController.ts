import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListAssuntosUseCase } from "./ListAssuntosUseCase";

class ListAssuntoController {
  async handle(request: Request, response: Response) {
    const listAssuntosUseCase = container.resolve(ListAssuntosUseCase);

    const assuntos = await listAssuntosUseCase.execute();

    return response.json(assuntos);
  }
}

export { ListAssuntoController };