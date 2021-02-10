import { Resolver, Query, Mutation, Arg, Int, Authorized } from 'type-graphql';
import { getManager } from 'typeorm';
import { Sheet } from './SheetModel';
import { CreateSheetInput, UpdateSheetInput } from './types';

@Resolver(Sheet)
export class SheetResolver {
  @Query(() => Sheet, { nullable: true })
  async sheet(@Arg('id', () => Int) id: number): Promise<Sheet | null> {
    return (await Sheet.findOne({ where: { id } })) || null;
  }

  // @Query(() => [Sheet], { nullable: true })
  // async filterSheets(@Arg('searchString') searchString: string): Promise<Sheet[]> {
  //   const res = await getManager()
  //     .createQueryBuilder()
  //     .select('sheet')
  //     .from(Sheet, 'sheet')
  //     .where('sheet.title = :title', { title: searchString })
  //     .orWhere('sheet.artist = :artist', { artist: searchString })
  //     .orWhere('sheet.year = :year', { year: searchString })
  //     .getMany();
  //   console.log('res:', res);

  //   // return Sheet.find({
  //   //   where: {
  //   //     OR: [
  //   //       { title: { contains: searchString } },
  //   //       { artist: { contains: searchString } },
  //   //       { year: { contains: searchString } },
  //   //     ],
  //   //   },
  //   // });
  //   return res;
  // }

  @Authorized()
  @Mutation(() => Sheet)
  async createSheet(@Arg('data') { title, artist, year }: CreateSheetInput): Promise<Sheet> {
    return await Sheet.create({ title, artist, year }).save();
  }

  @Authorized()
  @Mutation(() => Boolean)
  async updateSheet(
    @Arg('id', () => Int) id: number,
    @Arg('data') data: UpdateSheetInput
  ): Promise<boolean> {
    const sheet = await Sheet.findOneOrFail({ where: { id } });
    Object.assign(sheet, { ...data });
    await sheet.save();
    return true;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteSheet(@Arg('id', () => Int) id: number): Promise<boolean> {
    await Sheet.delete({ id });
    return true;
  }
}
