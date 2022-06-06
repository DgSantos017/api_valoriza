import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { AppError } from '../utils/AppError'


interface ILoginRequest {
  email: string
  password: string
}

class LoginUserService {

  async execute({ email, password }: ILoginRequest) {

    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({ email })

    if (!user) {
      throw new AppError('Email/Password incorrect', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email/Password incorrect', 401)
    }

    const token = sign(
      {
        email: user.email
      },
      '4f93ac9d10cb751b8c9c646bc9dbccb9',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

    return token
  }
}

export { LoginUserService }
