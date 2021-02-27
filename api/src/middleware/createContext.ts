import { Request } from 'express';
import { User } from '../entities/User/UserModel';

export interface Context {
  req: Request;
  userId?: User['id'];
}

export function createContext(req: Request): Context {
  return { req };
}
