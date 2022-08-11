import { container } from "tsyringe";

import { IAssuntosRepository } from "../../modules/materia/repositories/IAssuntosRepository";
import { AssuntosRepository } from "../../modules/materia/repositories/implementations/AssuntosRepository";

container.registerSingleton<IAssuntosRepository>(
  "AssuntosRepository",
  AssuntosRepository
);