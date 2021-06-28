import {Router} from 'express'
import SessionController from './session/sessionController'

const router = Router()

router.post('/login', SessionController.index);

export default router;