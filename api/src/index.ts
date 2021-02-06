import 'reflect-metadata';
import Express from 'express';
import cors from 'cors';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { SheetResolver } from './entities/Sheet/SheetResolver';
import { UserResolver } from './entities/User/UserResolver';
import { createContext } from './context';

const PORT = 4000;

const startServer = async () => {
  const schema = await buildSchema({
    resolvers: [SheetResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, '../graphql', 'schema.gql'),
  });

  const context = createContext();

  const apolloServer = new ApolloServer({
    schema,
    context,
  });

  const app = Express();
  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:5555',
    })
  );

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at: http://localhost:${PORT}/graphql`);
  });
};

startServer().catch((err) => console.error(err));
