import { Assunto } from '../entidades/Assunto';

interface ICriarAssuntoDTO {
  nome: string;
}

interface IRepositorioAssuntos {
  create({ nome }: ICriarAssuntoDTO): Promise<void>;
  list(): Promise<Assunto[]>;
  findByName(nome: string): Promise<Assunto>;
  // findById(id: string): Promise<Assunto>;
  delete(id: string): Promise<void>;
  update(nome: string): Promise<void>;
}

export { IRepositorioAssuntos, ICriarAssuntoDTO };