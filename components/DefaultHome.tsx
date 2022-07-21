import React from 'react'
import Typography from '../components/Typography'
import AuthenticationForm from '../components/AuthenticationForm'
import Image from 'next/image'
import { Input } from '../components/styled/Inputs.styled'
import { FlexContainer } from '../components/styled/Containers.styled'
import { MusicNoteBeamed, StarHalf } from 'react-bootstrap-icons'
import { useMediaQuery } from 'react-responsive'
import { APP_COLOR } from '../pages/_app'
import RatingBar from './RatingBar'

// TODO: Retrieve from GraphQL
const ALBUMS = [
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

const DefaultHome = () => {
    const isSmallerDevice = useMediaQuery({ query: '(max-width: 600px)' })
    const isTinyDevice = useMediaQuery({ query: '(max-width: 400px)' })
  
    return (
      <>
        <FlexContainer
        centerContent
        direction={isSmallerDevice ? "column" : "row"}
        bp={{
          color: "white",
          bgColor: APP_COLOR,
          m: 0,
          pb: "2rem",
        }}>
  
        <FlexContainer centerContent direction="column">
          <Typography component="h1" variant="lg-heading">
            Songiverse <MusicNoteBeamed size={35} />
          </Typography>
  
          <Typography bp={{mw: 300}}>
            Welcome to Songiverse where you can rate songs 
            you have listened to!
          </Typography>
        </FlexContainer>
  
        <FlexContainer gap={10} bp={{alignSelf: "center"}}>
          {
            ALBUMS.map((album, index) => <span
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
        <Typography bp={{color: APP_COLOR, alignSelf: "center"}} component="h2">Top Rated <StarHalf size={20} /></Typography>
  
        <FlexContainer direction={isTinyDevice ? "column" : "row"} gap={isTinyDevice ? 5 : 0} bp={{alignSelf: "center"}}>
          {
            ALBUMS.map(album => <FlexContainer gap={2} direction="column" key={album.name}>
                <Image
                  alt={`${album.name} by ${album.artist}`}
                  src={album.imgSrc}
                  width={200}
                  height={200}
                />
  
                <Typography bp={{color: APP_COLOR, m: 0}} component='h3'>{album.name}</Typography>
                <RatingBar color={APP_COLOR} rating={album.rating} />
                <Typography bp={{fs: 13}}>{album.artist}</Typography>
              </FlexContainer>)
          }
        </FlexContainer>
      </FlexContainer>
  
      <AuthenticationForm />
    </>)
  }

export default DefaultHome