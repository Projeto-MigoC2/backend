import { Router } from 'express';


import { CriarConteudoController } from '../modules/materia/useCases/criarConteudo/CriarConteudoController';
import { ListarConteudoController } from '../modules/materia/useCases/listarConteudos/ListarConteudosController';
// import { DeletarConteudoController } from '../modules/materia/useCases/deletarConteudo/DeletarConteudoController';

const conteudosRoutes = Router()

const createConteudoController = new CriarConteudoController();
const listConteudoController = new ListarConteudoController();
// const deleteConteudoController = new DeletarConteudoController();

conteudosRoutes.post('/', createConteudoController.handle);
conteudosRoutes.get('/', listConteudoController.handle);
// conteudosRoutes.delete('/', deleteConteudoController.handle);

export { conteudosRoutes }