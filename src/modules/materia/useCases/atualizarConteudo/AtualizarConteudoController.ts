import { Request, Response } from "express"
import { container } from "tsyringe";
import { AtualizarConteudoUseCase } from "./AtualizarConteudoUseCase";

class AtualizarConteudoController {
  async handle(request: Request, response: Response) {
    const { nome, novoNome, corpo, tags, links } = request.body;

    const atualizarConteudoUseCase = container.resolve(AtualizarConteudoUseCase);

    await atualizarConteudoUseCase.execute({ nome, novoNome, corpo, tags, links });


    return response.status(201).send();
  

  }
}

export { AtualizarConteudoController };