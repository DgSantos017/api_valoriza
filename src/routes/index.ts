import { Router } from 'express'
import { CreateComplimentController } from '../controllers/CreateComplimentController'
import { CreateTagController } from '../controllers/CreateTagController'
import { CreateUserController } from '../controllers/CreateUserController'
import { LoginUserController } from '../controllers/LoginUserController'
import { ensureAdmin } from '../middlwares/ensureAdmin'

const router = Router()

const createUserController = new CreateUserController()
const loginUserController = new LoginUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()

router.post('/register', createUserController.handle)
router.post('/login', loginUserController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/compliment', createComplimentController.handle)

export { router }
