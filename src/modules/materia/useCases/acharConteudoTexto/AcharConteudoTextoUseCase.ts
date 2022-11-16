import { inject, injectable } from "tsyringe";
import { Conteudo } from "@prisma/client";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";


interface IRequest {
  texto: string;
}


@injectable()
class AcharConteudoTextoUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute({ texto }: IRequest): Promise<Conteudo[]> {
    const conteudo = await this.RepositorioConteudos.findByText(texto);

    return conteudo;

  }
}

export { AcharConteudoTextoUseCase };