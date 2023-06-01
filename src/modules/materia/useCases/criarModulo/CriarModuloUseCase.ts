import { inject, injectable } from "tsyringe";

import { IRepositorioModulos } from "../../repositorios/IRepositorioModulos";

interface IRequest {
  nome: string;
  exemplo: string;
}

@injectable()
class CriarModuloUseCase {
  constructor(
    @inject("RepositorioModulos")
    private RepositorioModulos: IRepositorioModulos
  ) { }

  async execute({ nome, exemplo }: IRequest): Promise<boolean> {
    const ModuloJaExiste = await this.RepositorioModulos.findByName(nome);

    if (ModuloJaExiste) {
      return false;

    }
    else {
      await this.RepositorioModulos.create({ nome, exemplo });
      return true;
    }


  }
}

export { CriarModuloUseCase };