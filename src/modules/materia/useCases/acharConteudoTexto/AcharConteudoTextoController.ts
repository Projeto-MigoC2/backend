import { Request, Response } from "express"
import { container } from "tsyringe";
import { AcharConteudoTextoUseCase } from "./AcharConteudoTextoUseCase";

class AcharConteudoTextoController {
  async handle(request: Request, response: Response) {
    const texto = request.query.texto as string;
    const acharConteudoTextoUseCase = container.resolve(AcharConteudoTextoUseCase);

    try {
      const conteudos = await acharConteudoTextoUseCase.execute({ texto });
      return response.status(200).json(conteudos);
    }
    catch (error) { return response.status(404).json({ error: "Conteudo não encontrado" }); }
  }
}

export { AcharConteudoTextoController };