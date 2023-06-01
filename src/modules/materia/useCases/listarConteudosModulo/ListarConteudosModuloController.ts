import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListarConteudosModuloUseCase } from "./ListarConteudosModuloUseCase";

class ListarConteudosModuloController {
  async handle(request: Request, response: Response) {
    const modulo = request.params.titulo;
    const listarConteudosModuloUseCase = container.resolve(ListarConteudosModuloUseCase);

    const Conteudos = await listarConteudosModuloUseCase.execute(modulo);

    return response.status(200).json(Conteudos);
  }
}

export { ListarConteudosModuloController };