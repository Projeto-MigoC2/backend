import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("assuntos")
class Assunto {
  @PrimaryColumn()
  id?: string;

  @Column()
  titulo: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Assunto };
