import React from 'react'
import { Container, Info, teamProfileProps } from './TeamProfile.styles'

const TeamProfile = ({ profileImg, name, position }: teamProfileProps) => {
  return (
    <Container profileImg={profileImg}>
      <Info>
        <span>{name}</span>
        <span>{position}</span>
      </Info>
    </Container>
  )
}

export default TeamProfile
