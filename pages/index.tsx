import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import Text from '../components/Text'
import AuthenticationForm from '../components/AuthenticationForm'
import RatingBar from '../components/RatingBar'
import Link from 'next/link'
import { Input } from '../components/styled/Inputs.styled'
import { FlexContainer } from '../components/styled/Containers.styled'
import { MusicNoteBeamed, StarHalf } from 'react-bootstrap-icons'
import { useMediaQuery } from 'react-responsive'
import { Album, Song } from '../types'

type HomeProps = {
  albums: Album[]
}

const APP_COLOR = "#6495ED"

type User = {
  username: string,
  profilePic: string,
}

type FeedItemCriteria = {
  user: User,
  album?: Album,
  song?: Song,
}

type FeedItemProps = {
  criteria: FeedItemCriteria
}

const FeedItem = ({ criteria } : FeedItemProps) => {

  return (
    <FlexContainer direction="column" bp={{
      w: "450px",
      mw: "100%",
      mt: "1rem",
      mb: "1rem",
      p: 10,
      boxShadow: "5px 7px 15px #B8B8B8",
      borderRadius: 10
    }}>
      
      <FlexContainer style={{gap: 1, marginBottom: 10}}>
        <Image style={{borderRadius: "50%", marginRight: 5}} width={50} height={50} alt="profile photo" src={criteria.user.profilePic} />

        <Text component="span" bp={{fs: 12, alignSelf: "center"}} fontWeight="bold">{criteria.user.username}</Text>
        <Text component="span" bp={{fs: 12, fst: "italic", alignSelf: "center"}}>rated...</Text>
      </FlexContainer>

      <FlexContainer style={{borderTop: ".5px solid lightGray", padding: 5, alignItems: "center"}} direction="column">
        <Image style={{marginTop: 5}} width={150} height={150} alt="album" src={criteria.album?.imgSrc ?? ""} />
        <Text bp={{m: 0, color: APP_COLOR}} component="h3">{criteria.album?.name}</Text>

        <RatingBar rating={criteria.album?.rating} />
      </FlexContainer>
    </FlexContainer>
  )
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
              <Text bp={{fs: 10}}>{album.artist}</Text>
            </FlexContainer>)
        }
      </FlexContainer>
    </FlexContainer>

    <AuthenticationForm />
  </>)
}

const Home = ({albums} : HomeProps) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(true) 

  return (<>
    <Head>
      <title>Home - Songiverse</title>
    </Head>

    {isAuthenticated ? <AuthenticatedHome /> : <DefaultHome albums={albums} />}
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
