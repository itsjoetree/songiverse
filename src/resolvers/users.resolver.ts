import { Resolver, Query, Mutation, Arg} from "type-graphql"
import { ApolloError, UserInputError } from "apollo-server-micro"
import { User } from "../models/IUser"

@Resolver(User)
export class UsersResolver {
    @Query(() => User, { nullable: true })
    user(@Arg("username", () => String) username: string) : User | undefined {
        const user = new User();
        user.username = "mimi";

        return user;
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
    }
}

