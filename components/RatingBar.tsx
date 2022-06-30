import React, { ReactNode } from "react"
import { Icon, StarFill, StarHalf } from "react-bootstrap-icons"
import { useMediaQuery } from "react-responsive"
import { Block } from "./styled/Containers.styled"

const APP_COLOR = "#6495ED"

const RatingBar = ({rating} : any) => {
  const isTinyDevice = useMediaQuery({ query: '(max-width: 400px)' })

  const getStars = () : ReactNode[] => {
    const parsedRating = rating.toString()
    const nums = parsedRating.split('.')

    const stars = new Array(parseInt(nums[0])).fill(<StarFill size={isTinyDevice ? 10 : 20} color={APP_COLOR} />);

    if (nums.length > 1 && nums[1] >= 5) stars.push(<StarHalf size={isTinyDevice ? 10 : 20} color={APP_COLOR} />)

    return stars
  }

  return (
      <Block>
        {
          getStars().map((star, i) => <React.Fragment key={i}>{star}</React.Fragment>)
        }
      </Block>
  )
}

export default RatingBar