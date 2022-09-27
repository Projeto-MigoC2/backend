import { inject, injectable } from "tsyringe";
import { Assunto } from "../../entidades/Assunto";

import { IRepositorioAssuntos } from "../../repositorios/IRepositorioAssuntos";

@injectable()
class ListarAssuntosUseCase {
  constructor(
    @inject("RepositorioAssuntos")
    private RepositorioAssuntos: IRepositorioAssuntos
  ) { }

  async execute(): Promise<Assunto[]> {
    const assuntos = await this.RepositorioAssuntos.list();

    return assuntos;
  }
}

export { ListarAssuntosUseCase };