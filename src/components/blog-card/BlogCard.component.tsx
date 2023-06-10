import React from 'react'
import HeaderCaption from '../commons/header-caption/HeaderCaption.component'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Container, CoverSection, DescriptionSection, blogCardProps } from './BlogCard.styles'

const BlogCard = ({
  bgImage, heading, date, tradeType, caption, width, height, coverHeight = '40vh', coverWidth = '30vw', style, showCaption, margin, onClick
}: blogCardProps) => {
  return (
    <Container width={width} height={height} style={style} margin={margin} onClick={onClick}>
        <CoverSection coverHeight={coverHeight} coverWidth={coverWidth} bgImage={bgImage} />
        <DescriptionSection>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span><CalendarTodayIcon style={{ width: '12px', height: '12px', marginRight: '5px' }} />{date}</span>
                <span>{tradeType}</span>
            </div>
        <div style={{ width: '98%' }}>
          <HeaderCaption color='#000' headingSize="8px" captionSize="13px" textAlign="left" headingLength="100%" heading={heading} caption={caption} showCaption={showCaption} />
        </div>
        </DescriptionSection>
    </Container>
  )
}

export default BlogCard
