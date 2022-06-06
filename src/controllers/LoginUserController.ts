import { Request, Response } from 'express'
import { LoginUserService } from '../services/LoginUserService'

class LoginUserController {

  async handle(req: Request, res: Response) {

    const { email, password } = req.body
    const loginUserService = new LoginUserService()

    const token = await loginUserService.execute({ email, password })

    return res.json({'token': token})
  }
}

export { LoginUserController }

