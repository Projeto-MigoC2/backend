import { Link } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";

interface IRequest {
  nome: string;
  corpo: string;
  links: Link[];
  moduloId: string;
}

@injectable()
class CriarConteudoUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute({ nome, corpo, links, moduloId }: IRequest): Promise<boolean> {
    const ConteudoJaExiste = await this.RepositorioConteudos.findByName(nome);

    if (ConteudoJaExiste) {
      return false;

    }
    else {
      await this.RepositorioConteudos.create({ nome, corpo, links, moduloId });
      return true;
    }


  }
}

export { CriarConteudoUseCase };