import { Resolver, Query, Mutation, Arg, Int, Authorized, Ctx } from 'type-graphql';
import { getManager, getConnection } from 'typeorm';
import { Sheet } from './SheetModel';
import { User } from '../User/UserModel';
import { Context } from '../../middleware/createContext';
import { CreateSheetInput, UpdateSheetInput } from './types';

@Resolver(Sheet)
export class SheetResolver {
  @Query(() => Sheet, { nullable: true })
  async sheet(@Arg('id', () => Int) id: number): Promise<Sheet | null> {
    return (await Sheet.findOne({ where: { id } })) || null;
  }

  @Query(() => [Sheet])
  async filterSheets(@Arg('searchString') searchString: string): Promise<Sheet[]> {
    const terms = { searchString: `%${searchString}%` };
    return await getManager()
      .createQueryBuilder()
      .select('sheet')
      .from(Sheet, 'sheet')
      .where('artist ILIKE :searchString', terms)
      .orWhere('title ILIKE :searchString', terms)
      .orWhere('year ILIKE :searchString', terms)
      .getMany();
  }

  @Authorized()
  @Query(() => [Sheet])
  async getUserSheets(@Ctx() { userId }: Context): Promise<Sheet[]> {
    return await getConnection()
      .createQueryBuilder()
      .relation(User, 'sheets')
      .of(userId)
      .loadMany();
  }

  @Authorized()
  @Query(() => [User])
  async getSheetUsers(@Arg('id', () => Int) id: number): Promise<User[]> {
    return await getConnection().createQueryBuilder().relation(Sheet, 'users').of(id).loadMany();
  }

  @Authorized()
  @Mutation(() => Boolean)
  async addUserToSheet(
    @Arg('id', () => Int) id: number,
    @Ctx() { userId }: Context
  ): Promise<boolean> {
    await getConnection().createQueryBuilder().relation(Sheet, 'users').of(id).add(userId);
    return true;
  }

  @Authorized()
  @Mutation(() => Sheet)
  async createSheet(
    @Arg('data') { title, artist, year }: CreateSheetInput,
    @Ctx() { userId }: Context
  ): Promise<Sheet> {
    const sheet = await Sheet.create({ title, artist, year }).save();
    await getConnection().createQueryBuilder().relation(Sheet, 'users').of(sheet).add(userId);
    return sheet;
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
