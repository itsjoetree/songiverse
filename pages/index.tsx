import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import Text from '../components/Text'
import { Input } from '../components/styled/Inputs.styled'
import { FlexContainer } from '../components/styled/Containers.styled'
import { MusicNoteBeamed, StarHalf } from 'react-bootstrap-icons'
import { useMediaQuery } from 'react-responsive'
import { Album } from '../types'
import AuthenticationForm from '../components/AuthenticationForm'

type HomeProps = {
  albums: Album[]
}

const APP_COLOR = "#6495ED";

const Home = ({albums} : HomeProps) => {
  const isSmallerDevice = useMediaQuery({ query: '(max-width: 600px)' })

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

      <FlexContainer direction="column">
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

    <FlexContainer style={{marginTop: 10, alignItems: "center", justifyContent: "center"}}>
      <Input style={{maxWidth: "500px", width: "500px"}} placeholder="Search for music..."></Input>
    </FlexContainer>

    <FlexContainer direction="column">
      <Text color="#6495ED" sx={{alignSelf: "center"}} component="h2">Top Rated <StarHalf size={20} /></Text>

      <FlexContainer style={{alignSelf: "center", gap: 10}}>
        {
          albums.map(album => <Image
              key={album.name}
              alt={`${album.name} by ${album.artist}`}
              src={album.imgSrc}
              width={150}
              height={150}
            />
          )
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
      imgSrc: "/images/nectar-joji.jpg",
    },
    { 
      name: "Immunity",
      artist: "Clairo",
      imgSrc: "/images/immunity-clairo.png",
    },
    {
      name: "Cutie",
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
