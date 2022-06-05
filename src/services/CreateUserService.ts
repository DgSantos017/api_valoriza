import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UsersRepository"

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
}

class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepositories)
    if(!email){
      throw new Error('E-Mail invalid')
    }

    const userAlreadyExists = await usersRepository.findOne({ email })
    if(userAlreadyExists){
      throw new Error('User Already exists')
    }

    const user = usersRepository.create({
      name, email, admin: false
    })

    await usersRepository.save(user)

    return user

  }

}
export { CreateUserService }

