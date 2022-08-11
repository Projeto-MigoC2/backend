import { Router } from 'express';

import { CreateAssuntoController } from '../modules/materia/useCases/createAssunto/CreateAssuntoController';

import { DeleteAssuntoController } from '../modules/materia/useCases/deleteAssunto/DeleteAssuntoController';

const assuntosRoutes = Router()

const createAssuntoController = new CreateAssuntoController();
const deleteAssuntoController = new DeleteAssuntoController();

assuntosRoutes.post('/', createAssuntoController.handle);
assuntosRoutes.delete('/', deleteAssuntoController.handle);

export { assuntosRoutes }