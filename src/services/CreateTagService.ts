import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'
import { AppError } from '../utils/AppError'

class CreateTagService {
  
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new AppError('name mandatory')
    }

    const tagAlreadyExists = await tagsRepositories.findOne({ name })

    if (tagAlreadyExists) {
      throw new AppError('Tag already exists', 409)
    }

    const tag = tagsRepositories.create({ name })

    await tagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }
