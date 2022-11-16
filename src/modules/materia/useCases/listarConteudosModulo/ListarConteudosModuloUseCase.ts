import { inject, injectable } from "tsyringe";
import { Conteudo } from "@prisma/client";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";


@injectable()
class ListarConteudosModuloUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute(modulo): Promise<Conteudo[]> {
    const Conteudos = await this.RepositorioConteudos.listarPorModulo(modulo);

    return Conteudos;
  }
}

export { ListarConteudosModuloUseCase };