import { inject, injectable } from "tsyringe";

import { IRepositorioAssuntos } from "../../repositorios/IRepositorioAssuntos";

interface IRequest {
  titulo: string;
}

@injectable()
class DeletarAssuntoUseCase {
  constructor(
    @inject("RepositorioAssuntos")
    private RepositorioAssuntos: IRepositorioAssuntos
  ) { }

  async execute({ titulo }: IRequest): Promise<boolean> {
    const assunto = await this.RepositorioAssuntos.findByName(titulo);

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