import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListarModulosUseCase } from "./ListarModulosUseCase";

class ListarModuloController {
  async handle(request: Request, response: Response) {
    const listarModulosUseCase = container.resolve(ListarModulosUseCase);

    const modulos = await listarModulosUseCase.execute();

    return response.status(200).json(modulos);
  }
}

export { ListarModuloController };