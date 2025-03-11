import { Router } from 'express'
import { loginController } from '~/controllers/users.controllers'
import { loginValidator } from '~/middlewares/users.middlewares'
const usersrouter = Router()

usersrouter.post('/login', loginValidator, loginController)

export default usersrouter
