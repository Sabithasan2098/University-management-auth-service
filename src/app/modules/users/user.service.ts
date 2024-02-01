import { IUser } from './user.interface'
import { User } from './user.model&schema'

const createUser = async (user: IUser): Promise<IUser | null> => {
  /*
    auto generate incremental id
    default password
    */
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user')
  }
  return createUser
}

export default {
  createUser,
}
