import { Router } from 'express';

import { CriarAssuntoController } from '../modules/materia/useCases/criarAssunto/CriarAssuntoController';

import { DeletarAssuntoController } from '../modules/materia/useCases/deletarAssunto/DeletarAssuntoController';
import { ListarAssuntoController } from '../modules/materia/useCases/listarAssuntos/ListarAssuntosController';
import { AcharAssuntoNomeController } from '../modules/materia/useCases/acharAssuntoNome/AcharAssuntoNomeController';
import { ListarConteudosAssuntoController } from '../modules/materia/useCases/listarConteudosAssunto/ListarConteudosAssuntoController';

const assuntosRoutes = Router()

const createAssuntoController = new CriarAssuntoController();
const deleteAssuntoController = new DeletarAssuntoController();
const listAssuntoController = new ListarAssuntoController();
const acharAssuntoNomeController = new AcharAssuntoNomeController();
const listarConteudosAssunto = new ListarConteudosAssuntoController();

assuntosRoutes.post('/', createAssuntoController.handle);
assuntosRoutes.delete('/', deleteAssuntoController.handle);
assuntosRoutes.get('/', listAssuntoController.handle);
assuntosRoutes.get("/pesquisa", acharAssuntoNomeController.handle);
assuntosRoutes.get('/:titulo', listarConteudosAssunto.handle);

export { assuntosRoutes }