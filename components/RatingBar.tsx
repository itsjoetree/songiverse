import React, { ReactNode } from "react"
import { Star, StarFill, StarHalf } from "react-bootstrap-icons"
import { useMediaQuery } from "react-responsive"
import { Block } from "./Typography"
import {BaseComponentProps} from "../helpers/baseProps";

type RatingBarProps = {
  bp?: BaseComponentProps,
  rating: number,
  color?: string
}

const RatingBar = (props : RatingBarProps) => {
  const isTinyDevice = useMediaQuery({ query: '(max-width: 400px)' })
  const starSize = isTinyDevice ? 10 : 20

  const getStars = () : ReactNode[] => {
    const parsedRating = props.rating.toString()
    const nums = parsedRating.split('.')

    const stars = new Array(parseInt(nums[0])).fill(<StarFill size={starSize} color={props.color} />);

    if (nums.length > 1 && parseInt(nums[1]) >= 5)
      stars.push(<StarHalf size={starSize} color={props.color} />)

    if (stars.length < 5) stars.push(Array(5 - stars.length)
        .fill(<Star size={starSize} color={props.color}  />))

    return stars
  }

  return (
      <Block bp={props.bp}>
        {
          getStars().map((star, i) => <React.Fragment key={i}>{star}</React.Fragment>)
        }
      </Block>
  )
}

export default RatingBar