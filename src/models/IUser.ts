import { Field, ID, ObjectType } from "type-graphql";

export interface IUser {
    id: string | undefined;
    email: string | undefined;
    username: string | undefined;
    passwordHash: string | undefined;
    profileImgUri: string | undefined;
}

@ObjectType()
export class User {
    @Field(() => ID)
    id: string | undefined;

    @Field(() => String)
    email: string | undefined;

    @Field(() => String)
    username: string | undefined;

    @Field(() => String)
    passwordHash: string | undefined;

    @Field(() => String)
    profileImgUri: string | undefined;
}

