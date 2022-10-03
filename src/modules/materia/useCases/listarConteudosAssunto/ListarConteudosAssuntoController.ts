import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListarConteudosAssuntoUseCase } from "./ListarConteudosAssuntoUseCase";

class ListarConteudosAssuntoController {
  async handle(request: Request, response: Response) {
    const assunto = request.params.titulo;
    const listarConteudosAssuntoUseCase = container.resolve(ListarConteudosAssuntoUseCase);

    const Conteudos = await listarConteudosAssuntoUseCase.execute(assunto);

    return response.status(200).json(Conteudos);
  }
}

export { ListarConteudosAssuntoController };