import { inject, injectable } from "tsyringe";
import { Conteudo } from "@prisma/client";

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