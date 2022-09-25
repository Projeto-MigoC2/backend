import { inject, injectable } from "tsyringe";
import { Conteudo } from "../../entidades/Conteudo";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";


interface IRequest {
  titulo: string;
}


@injectable()
class AcharConteudoNomeUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute({ titulo }: IRequest): Promise<Conteudo> {
    const conteudo = await this.RepositorioConteudos.findByName(titulo);

    return conteudo;

  }
}

export { AcharConteudoNomeUseCase };