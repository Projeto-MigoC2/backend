import { Router } from 'express';
import { modulosRoutes } from './modulos.routes';
import { conteudosRoutes } from './conteudos.routes';

const router = Router()

router.use('/modulos', modulosRoutes)
router.use('/conteudos', conteudosRoutes)

export { router }