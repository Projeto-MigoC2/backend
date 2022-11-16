import { Conteudo, Link, } from '@prisma/client';
import { ILink } from '../entidades/Link';

interface ICreateConteudoDTO {
  nome: string;
  corpo: string;
  links: Link[];
  moduloId: string;
}

interface IRepositorioConteudos {
  create({ nome, corpo, links }: ICreateConteudoDTO): Promise<void>;
  // adicionarTags(id: string, tags: string[]): Promise<void>;
  listarTudo(): Promise<Conteudo[]>;
  listarPorModulo(nomeModulo: string): Promise<Conteudo[]>;
  findByName(nome: string): Promise<Conteudo>;
  findByText(text: string): Promise<Conteudo[]>;
  // findById(id: string): Promise<Conteudo>;
  delete(id: string): Promise<void>;
  update(nome: string): Promise<void>;
  addLinks(id: string, links: Link[]): Promise<void>;
}

export { IRepositorioConteudos, ICreateConteudoDTO };