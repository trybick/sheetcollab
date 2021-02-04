import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail, MinLength } from 'class-validator';
import { Sheet } from '../Sheet/SheetModel';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @Field(() => String, { nullable: true })
  name?: string | null;

  @Field(() => [Sheet])
  sheets?: [Sheet];
}
