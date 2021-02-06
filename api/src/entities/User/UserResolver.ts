import 'reflect-metadata';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import { User } from './UserModel';
import { RegisterUserInput } from './inputs';

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  registerUser(@Arg('data') data: RegisterUserInput, @Ctx() ctx: Context) {
    return ctx.prisma.user.create({ data });
  }

  @Query(() => User, { nullable: true })
  findUser(@Arg('id', () => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.user.findUnique({
      where: { id },
    });
  }
}
