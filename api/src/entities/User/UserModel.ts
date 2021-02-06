import 'reflect-metadata';
import { ObjectType, Field } from 'type-graphql';
import { IsEmail, MinLength } from 'class-validator';
import { Sheet } from '../Sheet/SheetModel';
import { Base } from '../BaseModel';

@ObjectType({ implements: Base })
export class User extends Base {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  name?: string | null;

  @MinLength(6)
  password: string;

  @Field(() => [Sheet], { nullable: true })
  sheets?: [Sheet];
}
