import 'reflect-metadata';
import { Field, ID, InterfaceType } from 'type-graphql';
import { PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@InterfaceType()
export abstract class Base extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'datetime' })
  updatedAt: Date;
}
