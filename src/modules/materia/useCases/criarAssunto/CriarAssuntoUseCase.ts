import { inject, injectable } from "tsyringe";

import { IRepositorioAssuntos } from "../../repositorios/IRepositorioAssuntos";

interface IRequest {
  titulo: string;
}

@injectable()
class CriarAssuntoUseCase {
  constructor(
    @inject("RepositorioAssuntos")
    private RepositorioAssuntos: IRepositorioAssuntos
  ) { }

  async execute({ titulo }: IRequest): Promise<boolean> {
    const assuntoJaExiste = await this.RepositorioAssuntos.findByName(titulo);

    if (assuntoJaExiste) {
      return false;

    }
    else {
      await this.RepositorioAssuntos.create({ titulo });
      return true;
    }


  }
}

export { CriarAssuntoUseCase };