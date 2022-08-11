import { inject, injectable } from "tsyringe";

import { IAssuntosRepository } from "../../repositories/IAssuntosRepository";

interface IRequest {
  nome: string;
}

@injectable()
class CreateAssuntoUseCase {
  constructor(
    @inject("AssuntosRepository")
    private assuntosRepository: IAssuntosRepository
  ) { }

  async execute({ nome }: IRequest): Promise<void> {
    const assuntoAlreadyExists = await this.assuntosRepository.findByName(nome);

    if (assuntoAlreadyExists) {
      throw new Error("Assunto já cadastrado");
    }

    await this.assuntosRepository.create({ nome });
  }
}

export { CreateAssuntoUseCase };