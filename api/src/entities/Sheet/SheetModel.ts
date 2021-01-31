import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Sheet {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  artist: string;

  @Field(() => String, { nullable: true })
  year?: string | null;
}
