import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { SheetResolver } from './entities/Sheet/SheetResolver';
import { UserResolver } from './entities/User/UserResolver';
import { createContext } from './context';

const port = 4000;

const startServer = async () => {
  const schema = await buildSchema({
    resolvers: [SheetResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, '../graphql', 'schema.gql'),
  });

  const context = createContext();

  new ApolloServer({ schema, context }).listen({ port }, () =>
    console.log(`🚀 Server ready at: http://localhost:${port}`)
  );
};

startServer();
