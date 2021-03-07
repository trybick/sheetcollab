import { Field, ObjectType } from 'type-graphql';
import { User } from './UserModel';

@ObjectType()
export class LoginOrRegisterResponse {
  @Field()
  token: string;

  @Field()
  user: User;
}
