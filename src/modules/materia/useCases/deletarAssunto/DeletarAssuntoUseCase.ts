import { inject, injectable } from "tsyringe";

import { IRepositorioAssuntos } from "../../repositorios/IRepositorioAssuntos";

interface IRequest {
  nome: string;
}

@injectable()
class DeletarAssuntoUseCase {
  constructor(
    @inject("RepositorioAssuntos")
    private RepositorioAssuntos: IRepositorioAssuntos
  ) { }

  async execute({ nome }: IRequest): Promise<boolean> {
    const assunto = await this.RepositorioAssuntos.findByName(nome);

    if (!assunto) {
      return false;

    }
    else {
      await this.RepositorioAssuntos.delete(assunto.id);
      return true;
    }

  }
}

export { DeletarAssuntoUseCase };