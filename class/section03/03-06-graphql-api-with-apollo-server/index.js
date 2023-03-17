import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Query {
    qqq: String
  }
`;

const resolvers = {
  Query: {
    qqq: () => {
        return 'ㅁㄴ이라ㅓ비ㅏㅈ더라ㅣㅁㄴ어리ㅏㅁㄴㄹ'
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server); // 4000