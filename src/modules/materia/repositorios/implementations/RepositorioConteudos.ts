import { Conteudo, Link, PrismaClient } from "@prisma/client";
import { ICreateConteudoDTO, IRepositorioConteudos } from "../IRepositorioConteudos";


class RepositorioConteudos implements IRepositorioConteudos {

  private repository: PrismaClient;

  constructor() {

    this.repository = new PrismaClient();


  }

  async create({ nome, corpo, links, tags, moduloId }: ICreateConteudoDTO): Promise<void> {


    const conteudo = await this.repository.conteudo.create({
      data: {
        nome: nome,
        corpo: corpo,
        tags: tags,
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
  async updateLinks(id: string, links: Link[]): Promise<void> {

    // remove all links and add the new ones

    await this.repository.conteudo.update({
      where: {
        id: id
      },
      data: {
        links: {
          deleteMany: {},
          create: links
        }
      }
    })
  }

  async listarTudo(): Promise<Conteudo[]> {

    // select only nome, corpo, links from conteudo

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
        links: true,
      },
    })

    return conteudo


  }

  async findById(id: string): Promise<Conteudo> {

    const conteudo = await this.repository.conteudo.findUnique({
      where: {
        id: id
      },
      include: {
        links: true
      }
    })

    return conteudo
  }

  async findByText(text: string): Promise<Conteudo[]> {

    // given a text, return all conteudos that have that text in the body or in the name

    const conteudos = await this.repository.conteudo.findMany({
      where: {
        OR: [
          {
            nome: {
              contains: text
            }
          },
          {
            corpo: {
              contains: text
            }
          },
          // search in the list of tags
          {
            tags: {
              has: text
            }
          }
        ]
      },
      include: {
        links: true
      }
    })


    return conteudos

  }
  async delete(id: string): Promise<void> {

    await this.repository.conteudo.delete(
      {
        where: {
          id: id
        }
      }
    )


  }
  async update(nome: string, novoNome: string, corpo: string, tags: string[], links: Link[]): Promise<void> {

    const conteudo = await this.repository.conteudo.update({
      where: {
        nome: nome
      }
      ,
      data: {
        nome: novoNome,
        corpo: corpo,
        tags: tags
      }
    })

    await this.updateLinks(conteudo.id, links)


  }

}


export { RepositorioConteudos };