import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { AppError } from '../utils/AppError'

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

class CreateComplimentService {

  async execute({ tag_id, user_sender, user_receiver, message
  }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    )

    const usersRepositories = getCustomRepository(UsersRepositories)

    if (user_sender === user_receiver) {
      throw new AppError('Incorrect User Receiver')
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver)

    if (!userReceiverExists) {
      throw new AppError('User Receiver does not exists', 404)
    }

    const compliment = complimentsRepositories.create({ tag_id, user_receiver, user_sender, message })
    await complimentsRepositories.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }
