import 'reflect-metadata';
import { Field, ID, InterfaceType } from 'type-graphql';

@InterfaceType()
export abstract class Base {
  @Field(() => ID)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
