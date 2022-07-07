import { ApolloServer } from "apollo-server-micro"
import "reflect-metadata"
import { buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from "type-graphql"

@ObjectType()
export class User {
    @Field(() => ID)
    username: string | undefined
}

@Resolver(User)
export class UsersResolver {
    @Query(() => [User])
    users() : User[] {
        return [
            {  username: "Joe" }

        ]
    }
}

const schema = await buildSchema({
    resolvers: [UsersResolver]
})

const server = new ApolloServer({
    schema
})

export const config = {
    api: {
        bodyParser: false
    },
}

const startServer = server.start()

export default async function handler(req: any, res: any) {
    await startServer
    await server.createHandler({ path: "/api/graphql" })(req, res)
}