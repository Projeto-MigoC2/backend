import { container } from "tsyringe";

// import { IRepositorioAssuntos } from "../../modules/materia/repositorios/IRepositorioAssuntos";
// import { RepositorioAssuntos } from "../../modules/materia/repositorios/implementations/RepositorioAssuntos";
import { IRepositorioConteudos } from "../../modules/materia/repositorios/IRepositorioConteudos";
import { RepositorioConteudos } from "../../modules/materia/repositorios/implementations/RepositorioConteudos";

import { IRepositorioModulos } from "../../modules/materia/repositorios/IRepositorioModulos";
import { RepositorioModulos } from "../../modules/materia/repositorios/implementations/RepositorioModulos";

// container.registerSingleton<IRepositorioAssuntos>(
//   "RepositorioAssuntos",
//   RepositorioAssuntos
// );

container.registerSingleton<IRepositorioConteudos>(
  "RepositorioConteudos",
  RepositorioConteudos
);

container.registerSingleton<IRepositorioModulos>(
  "RepositorioModulos",
  RepositorioModulos
);