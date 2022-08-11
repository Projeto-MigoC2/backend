import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteAssuntoUseCase } from "./DeleteAssuntoUseCase";

class DeleteAssuntoController {
  async handle(request: Request, response: Response) {
    const { nome } = request.body;

    const deleteAssuntoUseCase = container.resolve(DeleteAssuntoUseCase);

    await deleteAssuntoUseCase.execute({ nome });

    return response.status(201).send();
  }
}

export { DeleteAssuntoController };