import { hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UsersRepositories"
import { AppError } from '../utils/AppError'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

class CreateUserService {

  async execute({ name, email, admin = false, password }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepositories)
    if(!email){
      throw new AppError('E-Mail mandatory')
    }

    const userAlreadyExists = await usersRepository.findOne({ email })
    if(userAlreadyExists){
      throw new AppError('User Already exists', 409)
    }

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name, email, admin, password: passwordHash
    })

    await usersRepository.save(user)

    return user

  }

}
export { CreateUserService }

