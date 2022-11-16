import { Modulo } from '@prisma/client';

interface ICriarModuloDTO {
  nome: string;
  exemplo: string;
}

interface IRepositorioModulos {
  create({ nome, exemplo }: ICriarModuloDTO): Promise<void>;
  list(): Promise<Modulo[]>;
  findByName(nome: string): Promise<Modulo>;
  findById(id: string): Promise<Modulo>;
  delete(id: string): Promise<void>;
  update(nome: string, novoNome: string, novoExemplo?: string): Promise<void>;
}

export { IRepositorioModulos, ICriarModuloDTO };