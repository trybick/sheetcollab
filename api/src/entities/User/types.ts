import { InputType, Field, ObjectType } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { User } from './UserModel';

@InputType()
export class LoginUserInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class RegisterUserInput extends LoginUserInput {
  @Field({ nullable: true })
  name?: string;
}

@ObjectType()
export class LoginOrRegisterResponse {
  @Field()
  token: string;

  @Field()
  user: User;
}
