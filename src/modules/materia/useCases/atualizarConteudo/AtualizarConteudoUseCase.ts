import { Link } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";
import { IRepositorioModulos } from "../../repositorios/IRepositorioModulos";

interface IRequest {
  nome: string;
  novoNome: string;
  corpo: string;
  tags: string[];
  links: Link[];

}

@injectable()
class AtualizarConteudoUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos,
    @inject("RepositorioModulos")
    private RepositorioModulos: IRepositorioModulos
  ) { }

  async execute({ nome, novoNome, corpo, tags, links }: IRequest): Promise<boolean> {
    const ConteudoJaExiste = await this.RepositorioConteudos.findByName(nome);


    // check if modulo exists using moduloId



    if (!ConteudoJaExiste) {
      return false;

    }

    // verificar se o novo nome já existe

    const NovoConteudoJaExiste = await this.RepositorioConteudos.findByName(novoNome);

    if (NovoConteudoJaExiste) {
      return false;

    }

    else {
      await this.RepositorioConteudos.update(nome, novoNome, corpo, tags, links);
      return true;
    }


  }
}

export { AtualizarConteudoUseCase };