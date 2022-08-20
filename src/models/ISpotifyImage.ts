import { Field, ObjectType, Int } from "type-graphql";

export interface ISpotifyImage {
    url: string | undefined;
    height: number | undefined;
    width: number | undefined;
}

@ObjectType()
export class SpotifyImage implements ISpotifyImage {
    @Field(() => String)
    url: string | undefined;

    @Field(() => Int)
    height: number | undefined;

    @Field(() => Int)
    width: number | undefined;
}