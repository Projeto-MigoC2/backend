import { inject, injectable } from "tsyringe";
import { Conteudo } from "../../entidades/Conteudo";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";


@injectable()
class ListarConteudosAssuntoUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute(assunto): Promise<Conteudo[]> {
    const Conteudos = await this.RepositorioConteudos.listarPorAssunto(assunto);

    return Conteudos;
  }
}

export { ListarConteudosAssuntoUseCase };