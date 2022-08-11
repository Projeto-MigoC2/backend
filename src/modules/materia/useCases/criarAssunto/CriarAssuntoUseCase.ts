import { inject, injectable } from "tsyringe";

import { IRepositorioAssuntos } from "../../repositorios/IRepositorioAssuntos";

interface IRequest {
  nome: string;
}

@injectable()
class CriarAssuntoUseCase {
  constructor(
    @inject("RepositorioAssuntos")
    private RepositorioAssuntos: IRepositorioAssuntos
  ) { }

  async execute({ nome }: IRequest): Promise<boolean> {
    const assuntoJaExiste = await this.RepositorioAssuntos.findByName(nome);

    if (assuntoJaExiste) {
      return false;

    }
    else {
      await this.RepositorioAssuntos.create({ nome });
      return true;
    }


  }
}

export { CriarAssuntoUseCase };