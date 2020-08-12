var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')
const { GraphQLJSON } = require('graphql-type-json');

var schema = buildSchema(`
scalar JSON
  type Query {
    getProperty: JSON
    }
`);

var root = {
  JSON: GraphQLJSON,

  getProperty: () => {
    return {
      id: 123,
      name: "Best Unit",
      address: "123 beaver rd",
      city: "Virginia Beach",
      st: "VA",
      zip: 23451,
      bedrooms: 3,
      bathrooms: 2,
      floors: 1,
      rent: 1200,
      floorplan: "https://statesmanapartments.com/wp-content/uploads/A-1-bed-1-bath-789-2.jpg"
    }
  }
}



var app = express();
app.use(cors({ "origin": "*" }))
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');