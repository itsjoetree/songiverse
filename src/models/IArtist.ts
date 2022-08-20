import { Field, ID, Int, ObjectType } from "type-graphql";
import { ISpotifyImage, SpotifyImage } from "./ISpotifyImage";

export interface IArtist {
    id: string | undefined;
    name: string | undefined;
    images: ISpotifyImage[] | undefined;
    popularity: number | undefined;
    genres: string[] | undefined;
}

@ObjectType()
export class Artist implements IArtist {
    @Field(() => ID)
    id: string | undefined;

    @Field(() => String)
    name: string | undefined;

    @Field(() => [SpotifyImage])
    images: ISpotifyImage[] | undefined;

    @Field(() => Int)
    popularity: number | undefined;

    @Field(() => [String])
    genres: string[] | undefined;
}