import UserModel, { IUserSchema } from "../../models/user"
import { Resolver, Query, Mutation, Arg} from "type-graphql"
import { User } from "./users"
import { ApolloError, UserInputError } from "apollo-server-micro"
import * as admin from 'firebase-admin'
import containsSpecial from "../../helpers/containsSpecial"
import { Album } from "./album"

@Resolver(Album)
export class AlbumResolver {

    @Query(() => [Album])
    async albums(@Arg("token", () =>  String) token: string ) : Promise<Album[]> {

        let userObj = null

        try {
            userObj = await admin.auth().verifyIdToken(token)
        } catch {
            throw new ApolloError("Invalid token")
        }

        if (userObj === null) throw new ApolloError("Invalid token")
        
        const dbUser = await UserModel.findById(userObj.uid)

        if (dbUser == null) {
            throw new ApolloError("google-signin-incomplete")
        }

        return [
            {
                id: "nectar",
                name: "Nectar",
                artist: ["Joji"],
                rating: 5,
                imgSrc: "/images/nectar-joji.jpg",
            },
            {
                id: "immunity",
                name: "Immunity",
                artist: ["Clairo"],
                rating: 4.5,
                imgSrc: "/images/immunity-clairo.png",
            },
            {
                id: "cutie",
                name: "Cutie",
                rating: 4.5,
                artist: ["Between Friends"],
                imgSrc: "/images/cutie-bf.jpg",
            }
        ]
    }
}