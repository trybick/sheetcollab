import { AuthChecker } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { Context } from './createContext';
import { User } from '../entities/User/UserModel';

export const checkIsAuth: AuthChecker<Context> = ({ context }) => {
  const token = context.req.headers['authorization'];
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const decodedUser = verify(token, process.env.JWT_SECRET!) as User;
    context.user = decodedUser;
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
