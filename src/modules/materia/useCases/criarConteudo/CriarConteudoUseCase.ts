import { inject, injectable } from "tsyringe";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";

interface IRequest {
  titulo: string;
  resumo: string;
  elaboracao: string;
}

@injectable()
class CriarConteudoUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute({ titulo, resumo, elaboracao }: IRequest): Promise<boolean> {
    const ConteudoJaExiste = await this.RepositorioConteudos.findByName(titulo);

    if (ConteudoJaExiste) {
      return false;

    }
    else {
      await this.RepositorioConteudos.create({ titulo, resumo, elaboracao });
      return true;
    }


  }
}

export { CriarConteudoUseCase };