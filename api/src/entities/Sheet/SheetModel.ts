import 'reflect-metadata';
import { ObjectType, Field } from 'type-graphql';
import { Base } from '../BaseModel';
import { User } from '../User/UserModel';

@ObjectType({ implements: Base })
export class Sheet extends Base {
  @Field()
  artist: string;

  @Field()
  title: string;

  @Field(() => [User], { nullable: true })
  users?: [User];

  @Field(() => String, { nullable: true })
  year?: string | null;
}
