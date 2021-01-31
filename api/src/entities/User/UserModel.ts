import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail, MinLength } from 'class-validator';
import { Sheet } from '../Sheet/SheetModel';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => [Sheet])
  sheets?: [Sheet];
}
