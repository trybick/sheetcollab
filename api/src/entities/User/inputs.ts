import { InputType, Field } from 'type-graphql';
import { User } from './UserModel';

@InputType()
export class RegisterUserInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  name?: string;
}
