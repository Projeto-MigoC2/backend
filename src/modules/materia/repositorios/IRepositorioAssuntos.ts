import { Assunto } from '../entidades/Assunto';

interface ICriarAssuntoDTO {
  titulo: string;
}

interface IRepositorioAssuntos {
  create({ titulo }: ICriarAssuntoDTO): Promise<void>;
  list(): Promise<Assunto[]>;
  findByName(titulo: string): Promise<Assunto>;
  // findById(id: string): Promise<Assunto>;
  delete(id: string): Promise<void>;
  update(titulo: string): Promise<void>;
}

export { IRepositorioAssuntos, ICriarAssuntoDTO };