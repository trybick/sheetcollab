import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { User } from './entities/User/UserModel';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  req: Request;
  user?: User;
}

export function createContext(req: Request): Context {
  return { req, prisma };
}
