require('dotenv').config();
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User } from './UserModel';
import { LoginUserInput, LoginOrRegisterResponse, RegisterUserInput } from './types';

@Resolver(User)
export class UserResolver {
  @Mutation(() => LoginOrRegisterResponse)
  async registerUser(
    @Arg('data') { email, password, name }: RegisterUserInput
  ): Promise<LoginOrRegisterResponse> {
    const hashedPassword = await bcrypt.hash(password, 11);
    const createdUser = await User.create({
      email,
      name,
      password: hashedPassword,
    }).save();
    return {
      user: createdUser,
      token: sign({ createdUser }, process.env.JWT_SECRET!),
    };
  }

  @Mutation(() => LoginOrRegisterResponse)
  async loginUser(
    @Arg('data') { email, password }: LoginUserInput
  ): Promise<LoginOrRegisterResponse> {
    const requestedUser = await User.findOne({ where: { email } });
    if (!requestedUser) throw new Error('Email not found');
    const isMatch = bcrypt.compareSync(password, requestedUser.password);
    if (!isMatch) throw new Error('Incorrect password');
    return { user: requestedUser, token: sign({ requestedUser }, process.env.JWT_SECRET!) };
  }

  @Query(() => User, { nullable: true })
  async findUser(@Arg('id', () => Int) id: number): Promise<User | null> {
    return (await User.findOne({ where: { id } })) || null;
  }
}
