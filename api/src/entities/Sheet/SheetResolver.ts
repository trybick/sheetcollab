import 'reflect-metadata';
import { Resolver, Query, Mutation, Arg, Ctx, Int } from 'type-graphql';
import { Context } from '../../context';
import { Sheet } from './SheetModel';
import { CreateSheetInput, UpdateSheetInput } from './types';

@Resolver(Sheet)
export class SheetResolver {
  @Query(() => Sheet, { nullable: true })
  sheet(@Arg('id', () => Int) id: number, @Ctx() { prisma }: Context) {
    return prisma.sheet.findUnique({ where: { id } });
  }

  @Mutation(() => Sheet)
  createSheet(@Arg('data') data: CreateSheetInput, @Ctx() { prisma }: Context) {
    return prisma.sheet.create({ data });
  }

  @Mutation(() => Sheet, { nullable: true })
  updateSheet(
    @Arg('id', () => Int) id: number,
    @Arg('data') data: UpdateSheetInput,
    @Ctx() { prisma }: Context
  ) {
    return prisma.sheet.update({
      where: { id },
      data,
    });
  }

  @Mutation(() => Sheet, { nullable: true })
  deleteSheet(@Arg('id', () => Int) id: number, @Ctx() { prisma }: Context) {
    return prisma.sheet.delete({ where: { id } });
  }

  @Query(() => [Sheet])
  filterSheets(@Arg('searchString') searchString: string, @Ctx() { prisma }: Context) {
    return prisma.sheet.findMany({
      where: {
        OR: [
          { title: { contains: searchString } },
          { artist: { contains: searchString } },
          { year: { contains: searchString } },
        ],
      },
    });
  }
}
