import { Request, Response } from "express"
import { container } from "tsyringe";
import { AcharConteudoNomeUseCase } from "./AcharConteudoNomeUseCase";

class AcharConteudoNomeController {
  async handle(request: Request, response: Response) {
    const titulo = request.query.titulo as string;
    const acharConteudoNomeUseCase = container.resolve(AcharConteudoNomeUseCase);

    try {
      const conteudo = await acharConteudoNomeUseCase.execute({ titulo });
      return response.status(200).json(conteudo);
    }
    catch (error) { return response.status(404).json({ error: "Conteudo não encontrado" }); }
  }
}

export { AcharConteudoNomeController };