import styled from '@emotion/styled'

export interface ratingProps {
  rating?: number;
  ratedNum?: number
}

export const Stars = styled.div`
    display: flex;
    align-items: center;
`
export const RatingNum = styled.div`
    display: flex;
    align-items: center;
    font-size: 10px;
    margin-left: 8px;
    background-color: #F6F9ED;
    color: #304208;
    border: 1px solid rgba(134, 184, 23, 1);
    padding: 2px 10px;
    border-radius: 20px;
`
