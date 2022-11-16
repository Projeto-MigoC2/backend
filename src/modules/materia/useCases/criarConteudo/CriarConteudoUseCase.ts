import { Link } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";
import { IRepositorioModulos } from "../../repositorios/IRepositorioModulos";

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
    private RepositorioConteudos: IRepositorioConteudos,
    @inject("RepositorioModulos")
    private RepositorioModulos: IRepositorioModulos
  ) { }

  async execute({ nome, corpo, links, moduloId }: IRequest): Promise<boolean> {
    const ConteudoJaExiste = await this.RepositorioConteudos.findByName(nome);


    // check if modulo exists using moduloId
    const Modulo = await this.RepositorioModulos.findById(moduloId);

    if (!Modulo) {
      return false;
    }


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