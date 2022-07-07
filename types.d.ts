export type Album = {
    id: string,
    name: string,
    rating: number,
    artist: string[],
    imgSrc: string,
    tracks?: Song[]
}

export type User = {
    username: string,
    profilePic: string,
}

export type Song = {
    id: string,
    name: string
    rating: number,
    artists: string[],
    imgSrc: string,
    link: string?
}

export type FormProps = {
    switchForm?: any,
}