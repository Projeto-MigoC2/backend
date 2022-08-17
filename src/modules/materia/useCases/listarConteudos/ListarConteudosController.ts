import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListarConteudosUseCase } from "./ListarConteudosUseCase";

class ListarConteudoController {
  async handle(request: Request, response: Response) {
    const listarConteudosUseCase = container.resolve(ListarConteudosUseCase);

    const Conteudos = await listarConteudosUseCase.execute();

    return response.status(200).json(Conteudos);
  }
}

export { ListarConteudoController };