import { Request } from 'express';
import { User } from './entities/User/UserModel';

export interface Context {
  req: Request;
  user?: User;
}

export function createContext(req: Request): Context {
  return { req };
}
