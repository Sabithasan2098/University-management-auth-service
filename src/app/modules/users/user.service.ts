import config from '../../../config/index';
import ApiError from '../../../error/apiError';
import { IUser } from './user.interface';
import { User } from './user.model&schema';
import { incrementUserId } from './users.utils/users.utils.genarateId';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // incremental id
  const id = await incrementUserId(); //exported into utils.
  user.id = id;

  // create password
  if (!user.password) {
    user.password = config.student_pass as string; //i am pretty sure that was string thats why i type as string
  }

  const createUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user');
  }
  return createUser;
};

export const userService = {
  createUser,
};
