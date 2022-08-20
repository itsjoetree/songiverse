import { ObjectType, Field, ID } from "type-graphql"
import { IArtist, Artist } from "./IArtist";
import { ISpotifyImage, SpotifyImage } from "./ISpotifyImage";

export interface IAlbum {
    id: string | undefined;
    name: string | undefined;
    images: ISpotifyImage[] | undefined;
    release_date: string | undefined;
    artists: IArtist[] | undefined;
}

@ObjectType()
export class Album implements IAlbum {
    @Field(() => ID)
    id: string | undefined;

    @Field(() => String)
    name: string | undefined;

    @Field(() => [SpotifyImage])
    images: ISpotifyImage[] | undefined;

    @Field(() => String)
    release_date: string | undefined;

    @Field(() => [Artist])
    artists: IArtist[] | undefined;
}