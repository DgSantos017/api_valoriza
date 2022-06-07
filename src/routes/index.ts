import { Router } from 'express'
import { CreateComplimentController } from '../controllers/CreateComplimentController'
import { CreateTagController } from '../controllers/CreateTagController'
import { CreateUserController } from '../controllers/CreateUserController'
import { ListTagsController } from '../controllers/ListTagsController'
import { ListUserReceiveComplimentsController } from '../controllers/ListUserReceiveComplimentsController'
import { ListUsersController } from '../controllers/ListUsersController'
import { ListUserSendComplimentsController } from '../controllers/ListUserSendComplimentsController'
import { LoginUserController } from '../controllers/LoginUserController'
import { ensureAdmin } from '../middlwares/ensureAdmin'
import { ensureLogin } from '../middlwares/ensureLogin'

const router = Router()

const createUserController = new CreateUserController()
const loginUserController = new LoginUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post('/register', createUserController.handle)
router.post('/login', loginUserController.handle)
router.post('/tags', ensureLogin, ensureAdmin, createTagController.handle)
router.post('/compliment', ensureLogin,  createComplimentController.handle)
router.get('/users/compliments/send', ensureLogin, listUserSendComplimentsController.handle)
router.get('/users/compliments/receive', ensureLogin, listUserReceiveComplimentsController.handle)
router.get('/tags', ensureLogin, listTagsController.handle)
router.get('/users', ensureLogin, listUsersController.handle)


export { router }
