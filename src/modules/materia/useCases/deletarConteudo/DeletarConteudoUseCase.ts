import { inject, injectable } from "tsyringe";
import { IRepositorioConteudos } from "../../repositorios/IRepositorioConteudos";


@injectable()
class DeletarConteudoUseCase {
  constructor(
    @inject("RepositorioConteudos")
    private RepositorioConteudos: IRepositorioConteudos
  ) { }

  async execute(id: string): Promise<boolean> {
    const Conteudo = await this.RepositorioConteudos.findById(id);

    if (!Conteudo) {
      return false;
    } else {
      await this.RepositorioConteudos.delete(id);
      return true;
    }
  }
}

export { DeletarConteudoUseCase };