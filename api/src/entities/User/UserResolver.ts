require('dotenv').config();
import 'reflect-metadata';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Context } from '../../context';
import { User } from './UserModel';
import { LoginUserInput, LoginOrRegisterResponse, RegisterUserInput } from './types';

@Resolver(User)
export class UserResolver {
  @Mutation(() => LoginOrRegisterResponse)
  async registerUser(@Arg('data') data: RegisterUserInput, @Ctx() { prisma }: Context) {
    const hashedPassword = await bcrypt.hash(data.password, 11);
    return prisma.user
      .create({
        data: {
          ...data,
          password: hashedPassword,
        },
      })
      .then((user) => {
        return {
          user,
          token: sign(user, process.env.JWT_SECRET!),
        };
      });
  }

  @Mutation(() => LoginOrRegisterResponse)
  async loginUser(@Arg('data') data: LoginUserInput, @Ctx() { prisma }: Context) {
    const requestedUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!requestedUser) throw new Error('Email not found');
    const isMatch = bcrypt.compareSync(data.password, requestedUser.password);
    if (!isMatch) throw new Error('Incorrect password');
    return { user: requestedUser, token: sign(requestedUser, process.env.JWT_SECRET!) };
  }

  @Query(() => User, { nullable: true })
  findUser(@Arg('id', () => Int) id: number, @Ctx() { prisma }: Context) {
    return prisma.user.findUnique({
      where: { id },
    });
  }
}
