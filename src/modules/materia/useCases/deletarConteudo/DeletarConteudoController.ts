import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeletarConteudoUseCase } from "./DeletarConteudoUseCase";


class DeletarConteudoController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deletarConteudoUseCase = container.resolve(DeletarConteudoUseCase);

    const result = await deletarConteudoUseCase.execute(id);

    if (result) {
      return response.status(200).send();
    }
    else {
      return response.status(404).json({ error: "Conteudo não encontrado" });
    }

  }
}

export { DeletarConteudoController }