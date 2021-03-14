import { ObjectType, Field } from 'type-graphql';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
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

  @Field()
  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Sheet, sheet => sheet.users)
  @JoinTable()
  @Field(() => [Sheet])
  sheets?: Sheet[];
}
