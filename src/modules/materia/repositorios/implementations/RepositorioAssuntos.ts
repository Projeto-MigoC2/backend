import { Repository } from "typeorm";
import { AppDataSource } from "../../../../DockerDataSource";
import { Assunto } from "../../entidades/Assunto";
import { IRepositorioAssuntos, ICriarAssuntoDTO } from "../IRepositorioAssuntos";

class RepositorioAssuntos implements IRepositorioAssuntos {
  private repository: Repository<Assunto>;

  constructor() {

    this.repository = AppDataSource.getRepository(Assunto);

  }
  async create({ titulo }: ICriarAssuntoDTO): Promise<void> {
    const assunto = this.repository.create({ titulo });
    await this.repository.save(assunto);
  }

  async list(): Promise<Assunto[]> {
    const assuntos = await this.repository.find();
    return assuntos;
  }

  async findByName(titulo: string): Promise<Assunto> {
    const assunto = await this.repository.findOne({ where: { titulo } });
    return assunto;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async update(titulo: string): Promise<void> {
    const assunto = await this.findByName(titulo);
    assunto.titulo = titulo;
    await this.repository.save(assunto);
  }
}

export { RepositorioAssuntos };