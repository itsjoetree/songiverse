import { Field, Float, ID, ObjectType } from "type-graphql";
import { Album, IAlbum } from "./IAlbum";
import { Artist, IArtist } from "./IArtist";

export interface ITrack {
    id: string | undefined;
    name: string | undefined;
    album: IAlbum[] | undefined;
    release_date: string | undefined;
    artists: IArtist[] | undefined;
    duration: number | undefined;
}

@ObjectType()
export class Track implements ITrack {
    @Field(() => ID)
    id: string | undefined;

    @Field(() => String)
    name: string | undefined;

    @Field(() => Album)
    album: IAlbum[] | undefined;

    @Field(() => String)
    release_date: string | undefined;

    @Field(() => [Artist])
    artists: IArtist[] | undefined;

    @Field(() => Float)
    duration: number | undefined;
}