import { container } from "tsyringe";

import { IRepositorioAssuntos } from "../../modules/materia/repositorios/IRepositorioAssuntos";
import { RepositorioAssuntos } from "../../modules/materia/repositorios/implementations/RepositorioAssuntos";

container.registerSingleton<IRepositorioAssuntos>(
  "RepositorioAssuntos",
  RepositorioAssuntos
);