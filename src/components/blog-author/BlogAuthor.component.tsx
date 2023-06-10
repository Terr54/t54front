import React from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 25px;
    span {
        font-size: 13px;
    }
    label {
        color: #777777;
        margin: 0px 4px
    }
`
interface blogAuthorProps {
  author?: string,
  date?: string
}

const BlogAuthor = ({ author, date }: blogAuthorProps) => {
  return (
    <Container>
      <span><label>By</label><span>{author}</span></span>{' '},
      <span><label>On</label><span>{date}</span></span>
    </Container>
  )
}

export default BlogAuthor
