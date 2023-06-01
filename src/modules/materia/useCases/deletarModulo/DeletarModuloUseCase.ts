import { inject, injectable } from "tsyringe";

import { IRepositorioModulos } from "../../repositorios/IRepositorioModulos";

interface IRequest {
  nome: string;
}

@injectable()
class DeletarModuloUseCase {
  constructor(
    @inject("RepositorioModulos")
    private RepositorioModulos: IRepositorioModulos
  ) { }

  async execute({ nome }: IRequest): Promise<boolean> {
    const modulo = await this.RepositorioModulos.findByName(nome);

    if (!modulo) {
      return false;

    }
    else {
      await this.RepositorioModulos.delete(modulo.id);
      return true;
    }

  }
}

export { DeletarModuloUseCase };