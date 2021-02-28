import { AuthChecker } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { Context } from './createContext';

export const checkIsAuth: AuthChecker<Context> = async ({ context }) => {
  const token = context.req.headers['authorization'];
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const { userId } = verify(token, process.env.JWT_SECRET!) as { userId: number };
    context.userId = userId;
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
