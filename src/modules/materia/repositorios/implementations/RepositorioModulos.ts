import { Modulo, PrismaClient } from "@prisma/client";
import { ICriarModuloDTO, IRepositorioModulos } from "../IRepositorioModulos";



class RepositorioModulos implements IRepositorioModulos {

  private repository: PrismaClient;


  constructor() {

    this.repository = new PrismaClient();


  }

  async create({ nome, exemplo }: ICriarModuloDTO): Promise<void> {

    await this.repository.modulo.create({
      data: {
        nome: nome,
        exemplo: exemplo
      }
    })

  }
  async list(): Promise<Modulo[]> {

    const modulos = await this.repository.modulo.findMany();

    return modulos;


  }
  async findByName(nome: string): Promise<Modulo> {

    const modulo = await this.repository.modulo.findFirst({
      where: {
        nome: nome
      }
    })

    return modulo;


  }
  async delete(id: string): Promise<void> {

    await this.repository.modulo.delete({
      where: {
        id: id
      }
    })


  }
  async update(nome: string, novoNome: string, novoExemplo?: string): Promise<void> {
    const exemplo = novoExemplo ? novoExemplo : (await this.findByName(nome)).exemplo;

    await this.repository.modulo.update({
      where: {
        nome: nome
      },
      data: {
        nome: novoNome,
        exemplo: exemplo
      }
    })

  }

}

export { RepositorioModulos };