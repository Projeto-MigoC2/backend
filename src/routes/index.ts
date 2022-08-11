import { Router } from 'express';
import { assuntosRoutes } from './assuntos.routes';

const router = Router()

router.use('/assuntos', assuntosRoutes)

export { router }