import { InputType, Field, ObjectType } from 'type-graphql';
import { Sheet } from './SheetModel';

@InputType()
export class CreateSheetInput implements Partial<Sheet> {
  @Field()
  title: string;

  @Field()
  artist: string;

  @Field({ nullable: true })
  notes?: string;

  @Field({ nullable: true })
  year?: string;
}

@InputType()
export class UpdateSheetInput implements Partial<Sheet> {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  artist?: string;

  @Field({ nullable: true })
  year?: string;
}

@ObjectType()
export class ArtistCount {
  @Field()
  artist: string;

  @Field()
  count: string;
}

@ObjectType()
export class SheetCount {
  @Field()
  title: string;

  @Field()
  count: string;
}
