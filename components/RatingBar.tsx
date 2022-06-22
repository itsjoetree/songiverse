import React from "react"
import { Icon, StarFill, StarHalf } from "react-bootstrap-icons"
import { Block } from "./styled/Containers.styled"

const APP_COLOR = "#6495ED"

const RatingBar = ({rating} : any) => {

  const getStars = () : Icon[] => {
    const parsedRating = rating.toString()
    const nums = parsedRating.split('.')

    const stars = new Array(parseInt(nums[0])).fill(<StarFill size={20} color={APP_COLOR} />);

    if (nums.length > 1 && nums[1] >= 5) stars.push(<StarHalf size={20} color={APP_COLOR} />)

    return stars
  }

  return (
      <Block>
        {
          getStars().map(star => star)
        }
      </Block>
  )
}

export default RatingBar