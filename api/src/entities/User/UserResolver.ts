import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import { User } from './UserModel';
import { RegisterUserInput } from './inputs';

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async registerUser(@Arg('data') data: RegisterUserInput, @Ctx() ctx: Context) {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    data.password = hashedPassword;
    return ctx.prisma.user.create({ data });
  }

  @Query(() => User, { nullable: true })
  findUser(@Arg('id', () => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.user.findUnique({
      where: { id },
    });
  }
}
