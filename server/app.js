const express = require('express');

const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = require('./schema/schema');

const app = express();

// routes
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(4000, () => {
    console.log('listening for requests on port 4000');

})