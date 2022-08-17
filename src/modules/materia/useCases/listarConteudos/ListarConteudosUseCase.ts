import { inject, injectable } from "tsyringe";
import { Conteudo } from "../../entidades/Conteudo";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";

@injectable()
class ListarConteudosUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute(): Promise<Conteudo[]> {
    const Conteudos = await this.RepositorioConteudos.listarTudo();

    return Conteudos;
  }
}

export { ListarConteudosUseCase };