import { inject, injectable } from "tsyringe";
import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";

interface IRequest {
  assunto: string;
  conteudo: string;
}

@injectable()
class AddAssuntoConteudoUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos) { }

  async execute({ assunto, conteudo }: IRequest): Promise<void> {
    await this.RepositorioConteudos.adicionarAssunto(conteudo, assunto);
  }
}

export { AddAssuntoConteudoUseCase };