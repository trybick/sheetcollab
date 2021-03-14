import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import UsernameGen from 'username-generator';
import { User } from './UserModel';
import { LoginOrSignUpResponse } from './types';
require('dotenv').config();

@Resolver(User)
export class UserResolver {
  @Mutation(() => LoginOrSignUpResponse)
  async signUp(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('confirmPassword') confirmPassword: string
  ): Promise<LoginOrSignUpResponse> {
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error('Email already exists');

    const username = UsernameGen.generateUsername() as string;
    const hashedPassword = await bcrypt.hash(password, 11);
    const createdUser = await User.create({
      email,
      username,
      password: hashedPassword,
    }).save();

    return {
      user: createdUser,
      token: sign({ userId: createdUser.id }, process.env.JWT_SECRET!),
    };
  }

  @Mutation(() => LoginOrSignUpResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<LoginOrSignUpResponse> {
    const requestedUser = await User.findOne({ where: { email } });
    if (!requestedUser) throw new Error('Email not found');

    const isMatch = bcrypt.compareSync(password, requestedUser.password);
    if (!isMatch) throw new Error('Incorrect password');

    return {
      user: requestedUser,
      token: sign({ userId: requestedUser.id }, process.env.JWT_SECRET!),
    };
  }

  @Query(() => User, { nullable: true })
  async findUser(@Arg('id', () => Int) id: number): Promise<User | null> {
    return (await User.findOne({ where: { id } })) || null;
  }
}
