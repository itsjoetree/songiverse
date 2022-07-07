import React from 'react'
import Image from 'next/image'
import Text from './Text'
import RatingBar from './RatingBar'
import { Album, Song, User } from '../types'
import { FlexContainer } from './styled/Containers.styled'

const APP_COLOR = "#6495ED"

type FeedItemProps = {
    criteria: FeedItemCriteria
}

type FeedItemCriteria = {
    user: User,
    album?: Album,
    song?: Song,
}

const FeedItem = ({ criteria } : FeedItemProps) => {
    const getBody = () => {
      let imgSrc: string | null = null
      let name: string | null = null
      let rating: number | null = null
  
      if (criteria.album != null) {
        imgSrc = criteria.album.imgSrc
        name = criteria.album.name
        rating = criteria.album.rating
      }
      else if (criteria.song != null) {
        imgSrc = criteria.song.imgSrc
        name = criteria.song.name
        rating = criteria.song.rating
      }
      else {
        return
      }
  
      return (<>
        <Image style={{marginTop: 5}} width={150} height={150} alt="album" src={imgSrc} />
        <Text bp={{m: 0, color: APP_COLOR}} component="h3">{name}</Text>
        <RatingBar rating={rating} />
      </>)
    }
  
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
          {getBody()}
        </FlexContainer>
      </FlexContainer>
    )
  }

  export default FeedItem
  