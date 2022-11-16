import { Request, Response } from "express"
import { container } from "tsyringe";
import { AcharModuloNomeUseCase } from "./AcharModuloNomeUseCase";

class AcharModuloNomeController {
  async handle(request: Request, response: Response) {
    const titulo = request.query.titulo as string;
    const acharModuloNomeUseCase = container.resolve(AcharModuloNomeUseCase);

    try {
      const modulo = await acharModuloNomeUseCase.execute({ titulo });
      return response.status(200).json(modulo);
    }
    catch (error) { return response.status(404).json({ error: "Modulo não encontrado" }); }
  }
}

export { AcharModuloNomeController };