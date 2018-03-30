const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const PORT = 3000

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}))

app.listen(PORT)

console.log(`listening to port ${PORT} on localhost`)
