import 'reflect-metadata';
import Express from 'express';
import cors from 'cors';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { SheetResolver } from './entities/Sheet/SheetResolver';
import { UserResolver } from './entities/User/UserResolver';
import { createContext } from './middleware/createContext';
import { checkIsAuth } from './middleware/checkIsAuth';
import { databaseOptions } from './config/database';
import { corsAllowedOrigins } from './config/cors';

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await createConnection(databaseOptions);

  const schema = await buildSchema({
    resolvers: [SheetResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, '../graphql', 'schema.gql'),
    authChecker: checkIsAuth,
  });

  const apolloServer = new ApolloServer({
    context: ({ req }) => createContext(req),
    schema,
  });

  const app = Express();
  app.use(
    cors({
      credentials: true,
      origin: corsAllowedOrigins,
    })
  );

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at: http://localhost:${PORT}/graphql`);
  });
};

startServer().catch(err => console.error(err));
