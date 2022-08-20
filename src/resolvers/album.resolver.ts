import { Resolver, Query, Mutation, Arg} from "type-graphql"
import { Album } from "../models/IAlbum"

@Resolver(Album)
export class AlbumResolver {

    @Query(() => [Album])
    async albums(
        @Arg("token", () =>  String) token: string
    ) : Promise<Album[]> {

        const album = new Album();

        album.name = "test";
        album.id = "1";
        album.release_date = "9/2020";

        return [album]
    }
}