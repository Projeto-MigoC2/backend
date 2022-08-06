import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity("assuntos")
class Assunto {
  @PrimaryColumn()
  name: string;
}

export { Assunto };
