import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'
import createLoaders from './api/loaders';

import schema from './api/schema'

const app = express();

const GQL_PORT = 3010

app.use('*', cors())

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: { loaders: createLoaders() }
  }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(GQL_PORT, () => console.log(`GraphQL is loaded on http://localhost:${GQL_PORT}/graphql`))