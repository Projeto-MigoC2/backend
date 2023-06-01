import { inject, injectable } from "tsyringe";
import { Conteudo } from "@prisma/client";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";


interface IRequest {
  nome: string;
}


@injectable()
class AcharConteudoNomeUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute({ nome }: IRequest): Promise<Conteudo> {
    const conteudo = await this.RepositorioConteudos.findByName(nome);

    return conteudo;

  }
}

export { AcharConteudoNomeUseCase };