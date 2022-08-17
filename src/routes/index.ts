import { Router } from 'express';
import { assuntosRoutes } from './assuntos.routes';
import { conteudosRoutes } from './conteudos.routes';

const router = Router()

router.use('/assuntos', assuntosRoutes)
router.use('/conteudos', conteudosRoutes)

export { router }