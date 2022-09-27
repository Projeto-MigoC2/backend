import { Router } from 'express';

import { CriarAssuntoController } from '../modules/materia/useCases/criarAssunto/CriarAssuntoController';

import { DeletarAssuntoController } from '../modules/materia/useCases/deletarAssunto/DeletarAssuntoController';
import { ListarAssuntoController } from '../modules/materia/useCases/listarAssuntos/ListarAssuntosController';

const assuntosRoutes = Router()

const createAssuntoController = new CriarAssuntoController();
const deleteAssuntoController = new DeletarAssuntoController();
const listAssuntoController = new ListarAssuntoController();

assuntosRoutes.post('/', createAssuntoController.handle);
assuntosRoutes.delete('/', deleteAssuntoController.handle);
assuntosRoutes.get('/', listAssuntoController.handle);

export { assuntosRoutes }