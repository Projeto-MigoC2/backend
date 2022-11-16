import { Request, Response } from "express"
import { container } from "tsyringe";
import { AcharModuloIdUseCase } from "./AcharModuloIdUseCase";

class AcharModuloIdController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;
    const acharModuloIdUseCase = container.resolve(AcharModuloIdUseCase);

    try {
      const modulo = await acharModuloIdUseCase.execute({ id });
      return response.status(200).json(modulo);
    }
    catch (error) { return response.status(404).json({ error: "Modulo não encontrado" }); }
  }
}

export { AcharModuloIdController };