import { Conteudo, Link, PrismaClient } from "@prisma/client";
import { ICreateConteudoDTO, IRepositorioConteudos } from "../IRepositorioConteudos";


class RepositorioConteudos implements IRepositorioConteudos {

  private repository: PrismaClient;

  constructor() {

    this.repository = new PrismaClient();


  }


  async create({ nome, corpo, links, moduloId }: ICreateConteudoDTO): Promise<void> {


    const conteudo = await this.repository.conteudo.create({
      data: {
        nome: nome,
        corpo: corpo,
        moduloId: moduloId
      }
    })

    await this.addLinks(conteudo.id, links)


  }

  async addLinks(id: string, links: Link[]): Promise<void> {
    await this.repository.conteudo.update({
      where: {
        id: id
      },
      data: {
        links: {
          create: links
        }
      }
    })
  }

  async listarTudo(): Promise<Conteudo[]> {


    const conteudos = await this.repository.conteudo.findMany({
      include: {
        links: true
      }
    })

    return conteudos


  }
  async listarPorModulo(nomeModulo: string): Promise<Conteudo[]> {

    const conteudos = await this.repository.conteudo.findMany({
      where: {
        modulo: {
          nome: nomeModulo
        }
      },
      include: {
        links: true
      }
    })

    return conteudos


  }
  async findByName(nome: string): Promise<Conteudo> {

    const conteudo = await this.repository.conteudo.findUnique({
      where: {
        nome: nome
      },
      include: {
        links: true
      }
    })

    return conteudo


  }
  async findByText(text: string): Promise<Conteudo[]> {

    const conteudos = await this.repository.conteudo.findMany({
      where: {
        nome: {
          contains: text
        }
      },
      include: {
        links: true
      }
    })

    return conteudos

  }
  async delete(id: string): Promise<void> {

    await this.repository.conteudo.delete({
      where: {
        id: id
      }
    })


  }
  async update(nome: string): Promise<void> {

    // not implemented


  }

}


export { RepositorioConteudos };