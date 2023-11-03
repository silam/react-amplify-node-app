const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema

} = graphql
// create a type
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for User',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});


// rootquery

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Desccription',
    fields: {
        user: {
            type: UserType,
            args:{
                id:{
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                // we resovle with data
                // got adn return data
                let user = {
                    id: '234',
                    age: 34,
                    name: 'Si Lam'
                }

                return user;
            }
        }
    }

});

module.exports = new GraphQLSchema({
    query: RootQuery
})