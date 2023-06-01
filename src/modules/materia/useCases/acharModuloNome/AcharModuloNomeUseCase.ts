import { Modulo } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IRepositorioModulos } from "../../repositorios/IRepositorioModulos";


interface IRequest {
  titulo: string;
}


@injectable()
class AcharModuloNomeUseCase {
  constructor(
    @inject("RepositorioModulos")
    private RepositorioModulos: IRepositorioModulos
  ) { }

  async execute({ titulo }: IRequest): Promise<Modulo> {
    const Modulo = await this.RepositorioModulos.findByName(titulo);

    return Modulo;

  }
}

export { AcharModuloNomeUseCase };