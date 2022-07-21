import "reflect-metadata"
import { ApolloServer } from "apollo-server-micro"
import { UsersResolver } from "../../src/schema/users.resolver"
import { buildSchema } from "type-graphql"
import * as admin from 'firebase-admin'
import micro_cors from "micro-cors"
import mongoose from 'mongoose'
import { AlbumResolver } from "../../src/schema/album.resolver"

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(({
            projectId: "songiverse-development",
            privateKey: process.env.FIREBASE_API_KEY?.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL
        }))
    })    
}

const uri = process.env.MONGODB_URI

const main = async () => {
  await mongoose.connect(uri ?? "")
};

main()
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));

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