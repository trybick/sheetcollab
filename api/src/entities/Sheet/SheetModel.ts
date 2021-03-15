import { ObjectType, Field } from 'type-graphql';
import { Entity, Column, ManyToMany } from 'typeorm';
import { Base } from '../BaseModel';
import { User } from '../User/UserModel';

@Entity()
@ObjectType({ implements: Base })
export class Sheet extends Base {
  @Field()
  @Column()
  artist: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  notes?: string;

  @Field()
  @Column()
  title: string;

  @ManyToMany(() => User, user => user.sheets)
  @Field(() => [User])
  users?: User[];

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  year?: string | null;
}
