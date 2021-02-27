import { AuthChecker } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { Context } from './createContext';

export const checkIsAuth: AuthChecker<Context> = async ({ context }) => {
  const token = context.req.headers['authorization'];
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const {
      data: { id },
    } = verify(token, process.env.JWT_SECRET!) as { data: { id: number } };
    context.userId = id;
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
