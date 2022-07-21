import { ObjectType, Field, ID, Float } from "type-graphql"

@ObjectType()
export class Album {
    @Field(() => ID)
    id: string | undefined

    @Field(() => String)
    name: string | undefined

    @Field(() => [String])
    artist: string[] | undefined

    @Field(() => Float)
    rating: number | undefined

    @Field(() => String)
    imgSrc: string | undefined
}