import { Modulo } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IRepositorioModulos } from "../../repositorios/IRepositorioModulos";


interface IRequest {
  id: string;
}


@injectable()
class AcharModuloIdUseCase {
  constructor(
    @inject("RepositorioModulos")
    private RepositorioModulos: IRepositorioModulos
  ) { }

  async execute({ id }: IRequest): Promise<Modulo> {
    const Modulo = await this.RepositorioModulos.findById(id);

    return Modulo;

  }
}

export { AcharModuloIdUseCase };