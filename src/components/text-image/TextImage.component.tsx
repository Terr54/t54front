import React from 'react'
import { Container, Image, Texts, textImageProps } from './TextImage.styles'

const TextImage = ({ flexDirection, alignItems, heading, description, descriptionText, image, margin = '0px 60px 0px 0px', borderRadius = '12px' }: textImageProps) => {
  return (
    <Container flexDirection={flexDirection} alignItems={alignItems}>
      <Image margin={margin} borderRadius={borderRadius}>
        <img src={image} />
      </Image>
      <Texts>
        <h1>{heading}</h1>
        {<p>{description}</p> ?? descriptionText?.()}
      </Texts>
    </Container>
  )
}

export default TextImage
