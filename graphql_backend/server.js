const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql')
const app = express()


// DATABASE
const authors = [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' }
]
const books = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
    { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of Shadows', authorId: 3 },
    { id: 8, name: 'Beyond the Shadows', authorId: 3 }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'A book written by an autor',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        authorId:{type: GraphQLNonNull(GraphQLInt)},
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorId)
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'A author of a book',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorId === author.id)
            }
        }
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description:'Root Query',
    fields: () => ({
        book:{
            type:BookType,
            description: 'A book',
            args:{
                id: {type: GraphQLInt}
            },
            resolve: (parent, args) => books.find(book => book.id === args.id)
        },
        author:{
            type: AuthorType,
            description: 'A Author',
            args:{
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => authors.find(author => author.id === args.id)
        },
        books:{
            type: GraphQLList(BookType),
            description: 'List of All books',
            resolve: () => books
        },
        authors:{
            type: GraphQLList(AuthorType),
            description: 'List of All authors',
            resolve: () => authors
        }
    })
})


const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutating stuff',
    fields: ()=>({
        addBook:{
            type: BookType,
            description: 'Add a book',
            args:{
                name: {type: GraphQLNonNull(GraphQLString)},
                authorId: { type: GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                const book = { id: books.length + 1, name: args.name, authorId:
                    args.authorId}
                books.push(book)
                return book
            }
        },
        addAuthor:{
            type: AuthorType,
            description: 'Add a author',
            args:{
                name: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent, args) => {
                const author = { id: authors.length + 1, name: args.name}
                authors.push(author)
                return author
            }
        }
    })
})


const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => console.log('Server running'))