import { Request, Response } from "express"
import { container } from "tsyringe";
import { CriarConteudoUseCase } from "./CriarConteudoUseCase";

class CriarConteudoController {
  async handle(request: Request, response: Response) {
    const { nome, corpo, tags, links, moduloId } = request.body;

    const criarConteudoUseCase = container.resolve(CriarConteudoUseCase);

    const criar = await criarConteudoUseCase.execute({ nome, corpo, tags, links, moduloId });

    if (criar) {
      return response.status(201).send();
    }
    else {
      return response.status(400).json({ error: "Conteudo já cadastrado ou modulo não existe" });
    }

  }
}

export { CriarConteudoController };