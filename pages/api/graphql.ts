import "reflect-metadata"
import { ApolloServer } from "apollo-server-micro"
import { UsersResolver } from "../../src/resolvers/users.resolver"
import { buildSchema } from "type-graphql"
import { AlbumResolver } from "../../src/resolvers/album.resolver"
import micro_cors from "micro-cors"

const schema = await buildSchema({
    resolvers: [UsersResolver, AlbumResolver]
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

const cors = micro_cors({
    origin: "https://studio.apollographql.com",
    allowCredentials: true,
    allowMethods: ["GET", "POST","PUT","DELETE"],
    allowHeaders: ["access-control-allow-credentials","access-control-allow-origin","content-type"]          
})

const handlers = cors(async  function  handlers(req: any, res: any) {
    await startServer
    
    if (req.method === "OPTIONS") {
        res.end()
        return false
    }
    
    await server.createHandler({ path: "/api/graphql" })(req, res);
})
    
export default handlers