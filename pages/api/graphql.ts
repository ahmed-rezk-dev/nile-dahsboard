import { ApolloServer } from 'apollo-server-micro';
// import { ResolverContext } from 'graphql/apollo';
import { createContext } from 'graphql/context';
import { schema } from 'graphql/schema';

const apolloServer = new ApolloServer({
    // context: async ({ req, res }: ResolverContext) => createContext({ req, res }),
    context: async ({ req, res }: any) => createContext({ req, res }),
    schema,
    tracing: process.env.NODE_ENV === 'development',
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
