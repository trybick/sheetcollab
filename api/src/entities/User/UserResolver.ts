import 'reflect-metadata';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Context } from '../../context';
import { User } from './UserModel';
import { LoginResponse, RegisterUserInput } from './inputs';

@Resolver(User)
export class UserResolver {
  @Mutation(() => LoginResponse)
  async registerUser(@Arg('data') data: RegisterUserInput, @Ctx() { prisma }: Context) {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    return prisma.user
      .create({
        data: {
          ...data,
          password: hashedPassword,
        },
      })
      .then((user) => {
        return {
          token: sign(user, 'supersecret'),
          user,
        };
      });
  }

  @Query(() => User, { nullable: true })
  findUser(@Arg('id', () => Int) id: number, @Ctx() { prisma }: Context) {
    return prisma.user.findUnique({
      where: { id },
    });
  }
}
