import { Request, Response } from "express"
import { container } from "tsyringe";
import { CreateAssuntoUseCase } from "./CreateAssuntoUseCase";

class CreateAssuntoController {
  async handle(request: Request, response: Response) {
    const { nome } = request.body;

    const createAssuntoUseCase = container.resolve(CreateAssuntoUseCase);

    await createAssuntoUseCase.execute({ nome });

    return response.status(201).send();
  }
}

export { CreateAssuntoController };