import UserModel, { IUserSchema } from "../../models/user"
import { Resolver, Query, Mutation, Arg} from "type-graphql"
import { User } from "./users"
import { ApolloError, UserInputError } from "apollo-server-micro"
import * as admin from 'firebase-admin'
import containsSpecial from "../../helpers/containsSpecial"

@Resolver(User)
export class UsersResolver {
    @Query(() => User, { nullable: true })
    user(@Arg("username", () => String) username: string) : User | undefined {
        const users: User[] = [{ username: "Mimi" }, { username: "Joe" }]
        
        const user = users.find((u) => u.username === username)
        if (user == null) {
            throw new Error("User not found.")
        }

        return user
    }

    @Query(() => [User])
    users() : User[] {        
        return [
            {  username: "Joe" }
        ]
    }

    @Mutation(() => Boolean)
    userByEmailPassword(
        @Arg("username", () => String) username: string,
        @Arg("email", () => String) email: string,
        @Arg("password", () => String) password: string,
        @Arg("displayName", () => String) displayName: string
    ) {
        if (username == null) {
            throw new UserInputError("Username is required.")
        }

        if (email == null) {
            throw new UserInputError("Email is required.")
        }

        if (password == null) {
            throw new UserInputError("Password is required.")
        }

        const newUser: IUserSchema = {
            _id: "",
            username: username,
            displayName: displayName
        }
        
        const existingUsername = UserModel.findOne({ username: username })
        if (existingUsername != null) throw new ApolloError("Username is already taken.")

        admin.auth().createUser({
            email: email,
            password: password,
            displayName: displayName,
        })
        .then(response => {
            newUser._id = response.uid
            UserModel.create(newUser)
        })
        .catch(_err => {
            throw new ApolloError("Unable to create user.")
        })
    }

    @Mutation(() => Boolean)
    async userByProvider(
        @Arg("username", () => String) username: string,
        @Arg("identifier", () => String) identifier: string,
        @Arg("displayName", () => String) displayName: string,
        @Arg("token", () => String) token: string
    ) {

        try {
            const result = await admin.auth().verifyIdToken(token)
        } catch {
            throw new ApolloError("Invalid Token")
        }

        if (username == null) {
            throw new UserInputError("Username is required.")
        }

        if (identifier == null) {
            throw new ApolloError("Identifier is required.")
        }

        if (username === "") throw new ApolloError("Username is required.")
        else if (containsSpecial(username)) throw new ApolloError("Username cannot contain special characters.")
        else if (username.length < 4) throw new ApolloError("Username must be at least 4 characters long.")
        else if (username.length > 30) throw new ApolloError("Username must not exceed 30 characters.")

        if (displayName !== "" && displayName?.length > 30)
            throw new ApolloError("Display Name must not exceed 30 characters.")

        const newUser: IUserSchema = {
            _id: identifier,
            username: username.toLowerCase(),
            displayName: displayName
        }

        const existingUsername = UserModel.findOne({ username: username })
        if (existingUsername != null) throw new ApolloError("Username is already taken.")

        const existingUserIdentifier = UserModel.findOne({ identifier: identifier })
        if (existingUserIdentifier != null) throw new ApolloError("Identifier is already registered.")

        UserModel.create(newUser)
    }
}

