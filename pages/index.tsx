import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import Text from '../components/Text'
import AuthenticationForm from '../components/AuthenticationForm'
import RatingBar from '../components/RatingBar'
import { Input } from '../components/styled/Inputs.styled'
import { FlexContainer } from '../components/styled/Containers.styled'
import { MusicNoteBeamed, StarHalf } from 'react-bootstrap-icons'
import { useMediaQuery } from 'react-responsive'
import { Album } from '../types'

type HomeProps = {
  albums: Album[]
}

const APP_COLOR = "#6495ED"

const Home = ({albums} : HomeProps) => {
  const isSmallerDevice = useMediaQuery({ query: '(max-width: 600px)' })
  const isTinyDevice = useMediaQuery({ query: '(max-width: 400px)' })

  return (<>
    <Head>
      <title>Home - Songiverse</title>
    </Head>

    <FlexContainer
      direction={isSmallerDevice ? "column" : "row"}
      style={{
        color: "white",
        backgroundColor: "#6495ED",
        alignContent: "center",
        justifyContent: "center",
        margin: 0,
        paddingBottom: "2rem",
      }}>

      <FlexContainer centerContent direction="column">
        <Text component="h1">
          Songiverse <MusicNoteBeamed size={20} />
        </Text>

        <Text sx={{maxWidth: 300}}>
          Welcome to Songiverse where you can rate songs 
          you have listened to!
        </Text>
      </FlexContainer>

      <FlexContainer style={{gap: 10, alignSelf: "center"}}>
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

    <FlexContainer centerContent style={{marginTop: 10, alignSelf: "center"}}>
      <Input style={{maxWidth: "100%", width: "500px"}} placeholder="Search for music..."></Input>
    </FlexContainer>

    <FlexContainer direction="column">
      <Text color="#6495ED" sx={{alignSelf: "center"}} component="h2">Top Rated <StarHalf size={20} /></Text>

      <FlexContainer direction={isTinyDevice ? "column" : "row"} style={{alignSelf: "center", gap: isTinyDevice ? 5 : 0}}>
        {
          albums.map(album => <FlexContainer style={{gap: 2}} direction="column" key={album.name}>
              <Image
                alt={`${album.name} by ${album.artist}`}
                src={album.imgSrc}
                width={200}
                height={200}
              />
  
              <Text color={APP_COLOR} sx={{margin: 0}} component='h3'>{album.name}</Text>
              <RatingBar rating={album.rating} />
              <Text sx={{fontSize: 10}}>{album.artist}</Text>
            </FlexContainer>)
        }
      </FlexContainer>
    </FlexContainer>

    <AuthenticationForm />
  </>)
}

export async function getStaticProps() {
  
  const albums: Album[] = [
    { 
      name: "Nectar",
      artist: "Joji",
      rating: 5,
      imgSrc: "/images/nectar-joji.jpg",
    },
    { 
      name: "Immunity",
      artist: "Clairo",
      rating: 4.5,
      imgSrc: "/images/immunity-clairo.png",
    },
    {
      name: "Cutie",
      rating: 4.5,
      artist: "Between Friends",
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
