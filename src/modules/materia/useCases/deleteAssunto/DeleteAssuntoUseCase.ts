import { inject, injectable } from "tsyringe";

import { IAssuntosRepository } from "../../repositories/IAssuntosRepository";

interface IRequest {
  nome: string;
}

@injectable()
class DeleteAssuntoUseCase {
  constructor(
    @inject("AssuntosRepository")
    private assuntosRepository: IAssuntosRepository
  ) { }

  async execute({ nome }: IRequest): Promise<void> {
    const assunto = await this.assuntosRepository.findByName(nome);

    if (!assunto) {
      throw new Error("Assunto não cadastrado");
    }

    await this.assuntosRepository.delete(assunto.id);
  }
}

export { DeleteAssuntoUseCase };