import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Assunto } from "./Assunto";

@Entity("conteudos")
class Conteudo {
  @PrimaryColumn()
  id?: string;

  @Column()
  titulo: string;

  @Column()
  resumo: string;

  @Column()
  elaboracao: string;

  @ManyToOne(() => Assunto)
  @JoinColumn({ name: "assunto_id" })
  assunto: Assunto;

  @Column()
  assunto_id: string;

  @CreateDateColumn()
  criado_em: Date;

  @CreateDateColumn()
  atualizado_em: Date;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Conteudo };
