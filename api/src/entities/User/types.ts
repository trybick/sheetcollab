import { Field, ObjectType } from 'type-graphql';
import { User } from './UserModel';

@ObjectType()
export class LoginOrSignUpResponse {
  @Field()
  token: string;

  @Field()
  user: User;
}
