import { Request, Response } from "express"
import { container } from "tsyringe";
import { AtualizarConteudoUseCase } from "./AtualizarConteudoUseCase";

class AtualizarConteudoController {
  async handle(request: Request, response: Response) {
    const { nome, novoNome, corpo, tags, links } = request.body;

    const atualizarConteudoUseCase = container.resolve(AtualizarConteudoUseCase);

    const atualizar = await atualizarConteudoUseCase.execute({ nome, novoNome, corpo, tags, links });

    if (atualizar) {
      return response.status(201).send();
    }
    else {
      return response.status(400).json({ error: "Não foi possível atualizar o conteudo, revise os dados." });
    }

  }
}

export { AtualizarConteudoController };