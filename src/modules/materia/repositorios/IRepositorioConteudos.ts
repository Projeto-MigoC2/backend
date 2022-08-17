import { Conteudo } from "../entidades/Conteudo";

interface ICreateConteudoDTO {
  titulo: string;
  resumo: string;
  elaboracao: string;
}

interface IRepositorioConteudos {
  create({ titulo, resumo, elaboracao }: ICreateConteudoDTO): Promise<void>;
  // adicionarTags(id: string, tags: string[]): Promise<void>;
  adicionarAssunto(id: string, NomeAssunto: string): Promise<void>;
  listarTudo(): Promise<Conteudo[]>;
  listarPorAssunto(NomeAssunto: string): Promise<Conteudo[]>;
  findByName(titulo: string): Promise<Conteudo>;
  // findById(id: string): Promise<Conteudo>;
  delete(id: string): Promise<void>;
  update(titulo: string): Promise<void>;
}

export { IRepositorioConteudos, ICreateConteudoDTO };