import styled from '@emotion/styled'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react'
import Button from '../controls/button/Button.component'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 44px 30px 20px;
    box-sizing: border-box;
`

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const BackToTop = () => {
  return (
    <Container>
      <Button text='Go back up' iconAfter renderIcon={() => <ArrowUpwardIcon style={{ fontSize: '15px' }} />} color='#E63F07' bgColor='white' onClick={scrollToTop} />
    </Container>
  )
}

export default BackToTop
