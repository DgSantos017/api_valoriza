import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UsersRepositories"
import { AppError } from '../utils/AppError'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
}

class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepositories)
    if(!email){
      throw new AppError('E-Mail mandatory')
    }

    const userAlreadyExists = await usersRepository.findOne({ email })
    if(userAlreadyExists){
      throw new AppError('User Already exists', 409)
    }

    const user = usersRepository.create({
      name, email, admin: false
    })

    await usersRepository.save(user)

    return user

  }

}
export { CreateUserService }

