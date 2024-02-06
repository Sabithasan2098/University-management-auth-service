import { User } from '../user.model&schema';

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  /*i want id not -id, i want the last created user, i want a pure js thats why i use findOne({}, { id: 1, _id: 0 })
     .sort({
         createdAt: -1,
        }).lean()
        */
  return lastUser?.id;
};

export const incrementUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0'); //hoi se last createdAt
  //user er id ta dibe , noi to bania dibe

  /*
i want the password is string and five digit of zero thats why i use toString() & padStart(5,'0')
*/

  const incrementUserId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementUserId;
};
