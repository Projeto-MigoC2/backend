import { Request, Response } from "express"
import { container } from "tsyringe";
import { AcharAssuntoNomeUseCase } from "./AcharAssuntoNomeUseCase";

class AcharAssuntoNomeController {
  async handle(request: Request, response: Response) {
    const titulo = request.query.titulo as string;
    const acharAssuntoNomeUseCase = container.resolve(AcharAssuntoNomeUseCase);

    try {
      const assunto = await acharAssuntoNomeUseCase.execute({ titulo });
      return response.status(200).json(assunto);
    }
    catch (error) { return response.status(404).json({ error: "Assunto não encontrado" }); }
  }
}

export { AcharAssuntoNomeController };