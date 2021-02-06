import { InputType, Field } from 'type-graphql';
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
