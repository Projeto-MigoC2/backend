import { Link } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";
import { AppError } from "../../../../errors/AppError";



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
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute({ nome, novoNome, corpo, tags, links }: IRequest): Promise<void> {


    const ConteudoExiste = await this.RepositorioConteudos.findByName(nome);

    if (!ConteudoExiste) {
      throw new AppError("Conteudo não existe", 404);
    }

    if(nome != novoNome){
      const NovoConteudoJaExiste = await this.RepositorioConteudos.findByName(novoNome);
      if(NovoConteudoJaExiste){
        throw new AppError("Já existe um conteudo com esse nome");
      }
    }

    await this.RepositorioConteudos.update(nome, novoNome, corpo, tags, links);

  }
}

export { AtualizarConteudoUseCase };