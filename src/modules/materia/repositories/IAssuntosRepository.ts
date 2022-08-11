import { Assunto } from '../entities/Assunto';

interface ICreateAssuntoDTO {
  nome: string;
}

interface IAssuntosRepository {
  create({ nome }: ICreateAssuntoDTO): Promise<void>;
  list(): Promise<Assunto[]>;
  findByName(nome: string): Promise<Assunto>;
  // findById(id: string): Promise<Assunto>;
  delete(id: string): Promise<void>;
  update(nome: string): Promise<void>;
}

export { IAssuntosRepository, ICreateAssuntoDTO };