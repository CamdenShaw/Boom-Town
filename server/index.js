import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'
import createLoaders from './api/loaders';
import initPostgres from './api/psql-server/pg-resource'
import initConfigs from './api/psql-server/config'

import schema from './api/schema'

const app = express();
const PORT = process.env.PORT

initConfigs(app);
export const database = initPostgres(app);

const GQL_PORT = 3010

app.use('*', cors())

app.use(express.static(__dirname));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: { loaders: createLoaders() }
  }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, init);

function init(err) {
  !err && console.log(`Express was started on port ${PORT}`)
}

app.listen(GQL_PORT, () => console.log(`GraphQL is loaded on http://localhost:${GQL_PORT}/graphql`))