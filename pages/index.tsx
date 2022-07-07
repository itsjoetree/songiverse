import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import Text from '../components/Text'
import AuthenticationForm from '../components/AuthenticationForm'
import RatingBar from '../components/RatingBar'
import Link from 'next/link'
import FeedItem from '../components/FeedItem'
import { auth } from '../firebase/clientApp'
import { Input } from '../components/styled/Inputs.styled'
import { FlexContainer } from '../components/styled/Containers.styled'
import { MusicNoteBeamed, StarHalf } from 'react-bootstrap-icons'
import { useMediaQuery } from 'react-responsive'
import { Album } from '../types'
import { useAuthState } from 'react-firebase-hooks/auth'

const APP_COLOR = "#6495ED"

type HomeProps = {
  albums: Album[]
}

const SAMPLE_FEED = <FeedItem criteria={{ user: { username: "itsjoetree", profilePic: "/images/me.jpg" }, album: {
  id: "cutie",
  name: "Cutie",
  rating: 5,
  artist: ["Between Friends"],
  imgSrc: "/images/cutie-bf.jpg",
}}} />

const AuthenticatedHome = () => {
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
        <Text component="h3">Songiverse</Text>
      </Link>

      <Text bp={{alignSelf: "center"}}>Sign Out</Text>
    </FlexContainer>

    <FlexContainer centerContent bp={{mt: 10, alignSelf: "center"}}>
      <Input bp={{mw: "100%", w: "500px"}} placeholder="Search for music..."></Input>
    </FlexContainer>

    <FlexContainer centerContent bp={{m: 0}}>
      {SAMPLE_FEED}
    </FlexContainer>
  </>)
}

const DefaultHome = ({albums} : HomeProps) => {
  const isSmallerDevice = useMediaQuery({ query: '(max-width: 600px)' })
  const isTinyDevice = useMediaQuery({ query: '(max-width: 400px)' })

  return (
    <>
      <FlexContainer
      centerContent
      direction={isSmallerDevice ? "column" : "row"}
      bp={{
        color: "white",
        bgColor: "#6495ED",
        m: 0,
        pb: "2rem",
      }}>

      <FlexContainer centerContent direction="column">
        <Text component="h1">
          Songiverse <MusicNoteBeamed size={20} />
        </Text>

        <Text bp={{mw: 300}}>
          Welcome to Songiverse where you can rate songs 
          you have listened to!
        </Text>
      </FlexContainer>

      <FlexContainer gap={10} bp={{alignSelf: "center"}}>
        {
          albums.map((album, index) => <span
            key={album.name} 
            style={{display: "inline-block", marginTop: (index + 1) * 10}}
            >
            <Image
              alt={`${album.name} by ${album.artist}`}
              src={album.imgSrc}
              width={70}
              height={70}
            />
          </span>)
        }
      </FlexContainer>
    </FlexContainer>

    <FlexContainer centerContent bp={{mt: 10, alignSelf: "center"}}>
      <Input bp={{mw: "100%", w: "500px"}} placeholder="Search for music..."></Input>
    </FlexContainer>

    <FlexContainer direction="column">
      <Text bp={{color: "#6495ED", alignSelf: "center"}} component="h2">Top Rated <StarHalf size={20} /></Text>

      <FlexContainer direction={isTinyDevice ? "column" : "row"} gap={isTinyDevice ? 5 : 0} bp={{alignSelf: "center"}}>
        {
          albums.map(album => <FlexContainer gap={2} direction="column" key={album.name}>
              <Image
                alt={`${album.name} by ${album.artist}`}
                src={album.imgSrc}
                width={200}
                height={200}
              />

              <Text bp={{color: APP_COLOR, m: 0}} component='h3'>{album.name}</Text>
              <RatingBar rating={album.rating} />
              <Text bp={{fs: 12}}>{album.artist}</Text>
            </FlexContainer>)
        }
      </FlexContainer>
    </FlexContainer>

    <AuthenticationForm />
  </>)
}

const Home = ({albums} : HomeProps) => {
  const [user, loading, error] = useAuthState(auth)

  return (<>
    <Head>
      <title>Home - Songiverse</title>
    </Head>

    {user != null ? <AuthenticatedHome /> : <DefaultHome albums={albums} />}
  </>)
}

export async function getStaticProps() {

  const albums: Album[] = [
    {
      id: "nectar",
      name: "Nectar",
      artist: ["Joji"],
      rating: 5,
      imgSrc: "/images/nectar-joji.jpg",
    },
    {
      id: "immunity",
      name: "Immunity",
      artist: ["Clairo"],
      rating: 4.5,
      imgSrc: "/images/immunity-clairo.png",
    },
    {
      id: "cutie",
      name: "Cutie",
      rating: 4.5,
      artist: ["Between Friends"],
      imgSrc: "/images/cutie-bf.jpg",
    }
  ]

  return {
    props: {
      albums
    },
  }
}

export default Home
