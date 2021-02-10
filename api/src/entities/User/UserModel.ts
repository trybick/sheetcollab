import { ObjectType, Field } from 'type-graphql';
import { Entity, Column } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Sheet } from '../Sheet/SheetModel';
import { Base } from '../BaseModel';

@Entity()
@ObjectType({ implements: Base })
export class User extends Base {
  @Field()
  @IsEmail()
  @Column('text', { unique: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  name?: string | null;

  @Column()
  password: string;

  // @Column()
  // @Field()
  // sheets?: [Sheet];
}
