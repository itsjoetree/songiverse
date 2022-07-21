import React from 'react'
import Typography from '../components/Typography'
import Link from 'next/link'
import Router from 'next/router'
import FeedItem from './FeedItem'
import { auth } from '../firebase/clientApp'
import { Input } from '../components/styled/Inputs.styled'
import { FlexContainer } from '../components/styled/Containers.styled'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { getAlbums } from '../src/api'
import { APP_COLOR } from '../pages/_app'

const SAMPLE_FEED = <FeedItem criteria={{ user: { username: "itsjoetree", profilePic: "/images/me.jpg" }, album: {
    id: "cutie",
    name: "Cutie",
    rating: 5,
    artist: ["Between Friends"],
    imgSrc: "/images/cutie-bf.jpg",
}}} />

const AuthenticatedHome = () => {
    const [user, loading, error] = useAuthState(auth)
    const { data, isLoading } = useQuery(["albums"], async () => {

        const tokenId = await user?.getIdToken()
        if (tokenId == null) return tokenId

        getAlbums({ token: tokenId })
            .then(res => {
                return res.albums
            })
            .catch(err => {
                if (err.response.errors[0].message === "google-signin-incomplete")
                    Router.push("sign-in-with-google")
            })
    })

    return (<>
        <FlexContainer
            bp={{
                jc: "space-between",
                pl: 15,
                pr: 20,
                m: 0,
                color: "white",
                bgColor: APP_COLOR,
                w: "100%",
                mw: "100%"
            }}
        >
            <Link href="/">
                <Typography component="h3">Songiverse</Typography>
            </Link>

            <Typography bp={{ alignSelf: "center" }}>Sign Out</Typography>
        </FlexContainer>

        <FlexContainer centerContent bp={{ mt: 10, alignSelf: "center" }}>
            <Input bp={{ mw: "100%", w: "500px" }} placeholder="Search for music..."></Input>
        </FlexContainer>

        <FlexContainer centerContent bp={{ m: 0 }}>
            {SAMPLE_FEED}
        </FlexContainer>
    </>)
}

export default AuthenticatedHome