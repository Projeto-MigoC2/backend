import { Repository } from "typeorm";
import { AppDataSource } from "../../../../DockerDataSource";
import { IRepositorioAssuntos } from "../IRepositorioAssuntos";
import { RepositorioAssuntos } from "./TypeORMRepositorioAssuntos";
import { Conteudo } from "../../entidades/Conteudo";
import { ICreateConteudoDTO, IRepositorioConteudos } from "../IRepositorioConteudos";


class RepositorioConteudos implements IRepositorioConteudos {
  private repository: Repository<Conteudo>;
  private assuntoRepository: IRepositorioAssuntos;
  constructor() {

    this.repository = AppDataSource.getRepository(Conteudo);
    this.assuntoRepository = new RepositorioAssuntos();

  }

  async create({ titulo, resumo, elaboracao }: ICreateConteudoDTO): Promise<void> {
    const conteudo = await this.repository.create({ titulo, resumo, elaboracao });
    this.repository.save(conteudo);
  }
  async adicionarAssunto(TituloConteudo: string, TituloAssunto: string): Promise<void> {
    const conteudo = await this.findByName(TituloConteudo);
    const assunto = await this.assuntoRepository.findByName(TituloAssunto);
    conteudo.assunto = assunto;
    this.repository.save(conteudo);
  }
  async listarTudo(): Promise<Conteudo[]> {
    const conteudos = await this.repository.find();
    return conteudos;
  }
  async listarPorAssunto(TituloAssunto: string): Promise<Conteudo[]> {
    const assunto = await this.assuntoRepository.findByName(TituloAssunto);
    const conteudos = await this.repository.find({ where: { assunto } });
    return conteudos;
  }
  async findByName(titulo: string): Promise<Conteudo> {
    const conteudo = await this.repository.findOne({ where: { titulo } });
    return conteudo;
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  async update(titulo: string): Promise<void> {
    const conteudo = await this.findByName(titulo);
    conteudo.titulo = titulo;
    await this.repository.save(conteudo);
  }

  async findByText(text: string): Promise<Conteudo[]> {
    const conteudos = await this.repository.createQueryBuilder("conteudo").where("conteudo.titulo ILIKE :text OR conteudo.resumo ILIKE :text OR conteudo.elaboracao ILIKE :text", { text: `%${text}%` }).getMany();
    return conteudos;
  }

}

export { RepositorioConteudos };