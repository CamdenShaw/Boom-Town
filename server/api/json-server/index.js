import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'
import jsonLoaders from './api/json-server/jsonLoaders'

import schema from '../schema'

const app = express();
const PORT = process.env.PORT

initConfigs(app);
export const database = initPostgres(app);

const GQL_PORT = 3010

app.use('*', cors())

app.use(express.static(__dirname));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: { loaders: jsonLoaders() }
  }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, init);

function init(err) {
  !err && console.log(`Express was started on port ${PORT}`)
}

app.listen(GQL_PORT, () => console.log(`GraphQL is loaded on http://localhost:${GQL_PORT}/graphql`))