import { inject, injectable } from "tsyringe";
import { Assunto } from "../../entities/Assunto";

import { IAssuntosRepository } from "../../repositories/IAssuntosRepository";

@injectable()
class ListAssuntosUseCase {
  constructor(
    @inject("AssuntosRepository")
    private assuntosRepository: IAssuntosRepository
  ) { }

  async execute(): Promise<Assunto[]> {
    const assuntos = await this.assuntosRepository.list();

    return assuntos;
  }
}

export { ListAssuntosUseCase };