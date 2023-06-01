import { Router } from 'express';

import { CriarModuloController } from '../modules/materia/useCases/criarModulo/CriarModuloController';

import { DeletarModuloController } from '../modules/materia/useCases/deletarModulo/DeletarModuloController';
import { ListarModuloController } from '../modules/materia/useCases/listarModulos/ListarModulosController';
import { AcharModuloNomeController } from '../modules/materia/useCases/acharModuloNome/AcharModuloNomeController';
import { ListarConteudosModuloController } from '../modules/materia/useCases/listarConteudosModulo/ListarConteudosModuloController';

const modulosRoutes = Router()

const createModuloController = new CriarModuloController();
const deleteModuloController = new DeletarModuloController();
const listModuloController = new ListarModuloController();
const acharModuloNomeController = new AcharModuloNomeController();
const listarConteudosModulo = new ListarConteudosModuloController();

modulosRoutes.post('/', createModuloController.handle);
modulosRoutes.delete('/', deleteModuloController.handle);
modulosRoutes.get('/', listModuloController.handle);
modulosRoutes.get("/pesquisa", acharModuloNomeController.handle);
modulosRoutes.get('/:titulo', listarConteudosModulo.handle);

export { modulosRoutes }