import { Repository } from "typeorm";
import { AppDataSource } from "../../../../DockerDataSource";
import { Conteudo } from "../../entidades/Conteudo";
import { ICreateConteudoDTO, IRepositorioConteudos } from "../IRepositorioConteudos";


class RepositorioConteudos implements IRepositorioConteudos {
  private repository: Repository<Conteudo>;
  constructor() {

    this.repository = AppDataSource.getRepository(Conteudo);

  }
  async create({ titulo, resumo, elaboracao }: ICreateConteudoDTO): Promise<void> {
    const conteudo = await this.repository.create({ titulo, resumo, elaboracao });
    this.repository.save(conteudo);
  }
  adicionarAssunto(id: string, NomeAssunto: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async listarTudo(): Promise<Conteudo[]> {
    const conteudos = await this.repository.find();
    return conteudos;
  }
  async listarPorAssunto(NomeAssunto: string): Promise<Conteudo[]> {
    throw new Error("Method not implemented.");
  }
  async findByName(titulo: string): Promise<Conteudo> {
    const conteudo = await this.repository.findOne({ where: { titulo } });
    return conteudo;
  }
  async delete(id: string): Promise<void> {
    const conteudo = await this.repository.delete(id);
  }
  async update(titulo: string): Promise<void> {
    const conteudo = await this.findByName(titulo);
    conteudo.titulo = titulo;
    await this.repository.save(conteudo);
  }

}

export { RepositorioConteudos };