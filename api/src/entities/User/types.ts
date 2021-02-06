import { InputType, Field, ObjectType } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { User } from './UserModel';

@InputType()
export class RegisterUserInput implements Partial<User> {
  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  name?: string;
}

@InputType()
export class LoginUserInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class LoginOrRegisterResponse {
  @Field()
  token: string;

  @Field()
  user: User;
}
