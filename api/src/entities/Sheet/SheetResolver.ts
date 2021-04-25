import { Resolver, Query, Mutation, Arg, Int, Authorized, Ctx } from 'type-graphql';
import { getConnection, getRepository, SelectQueryBuilder } from 'typeorm';
import { Sheet } from './SheetModel';
import { User } from '../User/UserModel';
import { Context } from '../../middleware/createContext';
import { ArtistCount, CreateSheetInput, UpdateSheetInput } from './types';
import parseJSON from 'date-fns/parseJSON';

@Resolver(Sheet)
export class SheetResolver {
  @Query(() => Sheet, { nullable: true })
  async sheet(@Arg('id', () => Int) id: number): Promise<Sheet | null> {
    return (await Sheet.findOne({ where: { id } })) || null;
  }

  @Query(() => [Sheet])
  async recentSheets(): Promise<Sheet[]> {
    return await Sheet.find({
      relations: ['users'],
      order: {
        createdAt: 'DESC',
      },
      take: 10,
    });
  }

  @Query(() => [Sheet])
  async filterSheets(@Arg('searchString') searchString: string): Promise<Sheet[]> {
    return await Sheet.find({
      relations: ['users'],
      order: {
        createdAt: 'DESC',
      },
      where: (qb: SelectQueryBuilder<Sheet>) => {
        qb.where('artist ILIKE :searchString', {
          searchString: `%${searchString}%`,
        }).orWhere('title ILIKE :searchString', { searchString: `%${searchString}%` });
      },
    });
  }

  @Query(() => [ArtistCount])
  async popularArtists(): Promise<ArtistCount[]> {
    const popularArtists = (await getRepository(Sheet)
      .createQueryBuilder('sheet')
      .select('sheet.artist AS artist')
      .addSelect('COUNT(*) AS count')
      .groupBy('sheet.artist')
      .orderBy('count', 'DESC')
      .take(5)
      .getRawMany()) as ArtistCount[];

    return popularArtists;
  }

  @Authorized()
  @Query(() => [Sheet])
  async getUserSheets(@Ctx() { userId }: Context): Promise<Sheet[]> {
    const sheets = await getConnection()
      .createQueryBuilder()
      .orderBy('sheets', 'ASC')
      .relation(User, 'sheets')
      .of(userId)
      .loadMany();
    const sorted = sheets.sort((a, b) => +parseJSON(b.updatedAt) - +parseJSON(a.updatedAt));

    return sorted;
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
    @Arg('data') { artist, title, notes, year }: CreateSheetInput,
    @Ctx() { userId }: Context
  ): Promise<Sheet> {
    const sheet = await Sheet.create({ artist, title, notes, year }).save();
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
