import { Conteudo, Link, } from '@prisma/client';
import { ILink } from '../entidades/Link';

interface ICreateConteudoDTO {
  nome: string;
  corpo: string;
  links: Link[];
  tags: string[];
  moduloId: string;
}

interface IRepositorioConteudos {
  create({ nome, corpo, links, tags, moduloId }: ICreateConteudoDTO): Promise<void>;
  // adicionarTags(id: string, tags: string[]): Promise<void>;
  listarTudo(): Promise<Conteudo[]>;
  listarPorModulo(nomeModulo: string): Promise<Conteudo[]>;
  findByName(nome: string): Promise<Conteudo>;
  findByText(text: string): Promise<Conteudo[]>;
  findById(id: string): Promise<Conteudo>;
  delete(id: string): Promise<void>;
  update(nome: string, novoNome: string, corpo: string, tags: string[], links: Link[]): Promise<void>;
  addLinks(id: string, links: Link[]): Promise<void>;
  updateLinks(id: string, links: Link[]): Promise<void>;
}

export { IRepositorioConteudos, ICreateConteudoDTO };