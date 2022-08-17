import { Request, Response } from "express"
import { container } from "tsyringe";
import { CriarConteudoUseCase } from "./CriarConteudoUseCase";

class CriarConteudoController {
  async handle(request: Request, response: Response) {
    const { titulo, resumo, elaboracao } = request.body;

    const criarConteudoUseCase = container.resolve(CriarConteudoUseCase);

    const criar = await criarConteudoUseCase.execute({ titulo, resumo, elaboracao });

    if (criar) {
      return response.status(201).send();
    }
    else {
      return response.status(400).json({ error: "Conteudo já cadastrado" });
    }

  }
}

export { CriarConteudoController };