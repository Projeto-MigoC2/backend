import { inject, injectable } from "tsyringe";
import { Modulo } from "@prisma/client";

import { IRepositorioModulos } from "../../repositorios/IRepositorioModulos";

@injectable()
class ListarModulosUseCase {
  constructor(
    @inject("RepositorioModulos")
    private RepositorioModulos: IRepositorioModulos
  ) { }

  async execute(): Promise<Modulo[]> {
    const modulos = await this.RepositorioModulos.list();

    return modulos;
  }
}

export { ListarModulosUseCase };