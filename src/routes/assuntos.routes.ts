import { Router } from 'express';

import { CreateAssuntoController } from '../modules/materia/useCases/createAssunto/CreateAssuntoController';

import { DeleteAssuntoController } from '../modules/materia/useCases/deleteAssunto/DeleteAssuntoController';
import { ListAssuntoController } from '../modules/materia/useCases/listAssuntos/ListAssuntosController';

const assuntosRoutes = Router()

const createAssuntoController = new CreateAssuntoController();
const deleteAssuntoController = new DeleteAssuntoController();
const listAssuntoController = new ListAssuntoController();

assuntosRoutes.post('/', createAssuntoController.handle);
assuntosRoutes.delete('/', deleteAssuntoController.handle);
assuntosRoutes.get('/', listAssuntoController.handle);

export { assuntosRoutes }