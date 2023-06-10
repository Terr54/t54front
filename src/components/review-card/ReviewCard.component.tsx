import React from 'react'
import Button from '../commons/controls/button/Button.component'
import Like from '../commons/like/Like.component'
import SelectDoc from '../commons/select-doc/SelectDoc.component'
import Rating from '../rating/Rating.component'
import { Container, Username, reviewCardProps, UserDetail, Heading, Message, Date, Attachments, Reactions, Likes } from './ReviewCard.styles'

const ReviewCard = ({
  username,
  rating,
  ratedNum,
  date,
  message,
  likes,
  dislikes,
  handleLikes,
  handleDislikes,
  attachments
}: reviewCardProps) => {
  return (
    <Container>
      <Heading>
        <UserDetail>
        <Username>{username}</Username>
        <Date>{date}</Date>
        </UserDetail>
        <Rating rating={rating} ratedNum={ratedNum} />
      </Heading>
      <Message>
        <p>{message}</p>
      </Message>
      <Attachments>
        <SelectDoc text='1 file attached' />
      </Attachments>
      <Reactions>
        <Button text='Add Comment' color='#E63F07' bgColor='transparent' padding='15px 0px 10px' fontSize='11px' />
        <Likes>
          <Like like likes={likes} handleLikes={handleLikes}/>
          <Like dislikes={dislikes} handleDislikes={handleDislikes}/>
        </Likes>
      </Reactions>
    </Container>
  )
}

export default ReviewCard
