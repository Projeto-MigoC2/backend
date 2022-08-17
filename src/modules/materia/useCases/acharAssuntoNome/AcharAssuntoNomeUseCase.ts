import { inject, injectable } from "tsyringe";
import { Assunto } from "../../entidades/Assunto";

import { IRepositorioAssuntos } from "../../repositorios/IRepositorioAssuntos";


interface IRequest {
  titulo: string;
}


@injectable()
class AcharAssuntoNomeUseCase {
  constructor(
    @inject("RepositorioAssuntos")
    private RepositorioAssuntos: IRepositorioAssuntos
  ) { }

  async execute({ titulo }: IRequest): Promise<Assunto> {
    const assunto = await this.RepositorioAssuntos.findByName(titulo);

    return assunto;

  }
}

export { AcharAssuntoNomeUseCase };