import styled from '@emotion/styled';
import productImg from '../../assets/pictures/spices.png'

export interface productPreviewProps {
  heading?: string;
  height?: string;
  country?: string;
  color?: string;
  quantity?: string;
  MOQ?: string,
  packaging?: string,
  processing?: string,
  incoterm?: string,
  rating?: number;
  ratedNum?: number;
  countryFlag?: string;
}

export const Container = styled.div<productPreviewProps>`
    display: grid;
    grid-template-columns: 0.9fr 1fr;
    column-gap: 16px;
    height: ${({ height }) => height};
    @media (max-width: 805px) {
        display: flex;
        flex-wrap: wrap;
    }
`
export const CoverImages = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
`
export const MiniImages = styled.div`
   display: flex;
   flex-direction: column;
   margin-right: 8px;
   justify-content: center;
   img {
    width: 80px;
    height: 80px;
    margin: 5px 0px;
    border-radius: 6px;
    cursor: pointer;
    object-fit: cover;
   }
`
export const BigImage = styled.div<{ image?: string }>`
   background-image: url(${({ image }) => image ?? productImg});
   background-size: cover;
   background-position: center;
   width: 100%;
   min-height: 330px;
   border-radius: 6px;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   padding: 0px 15px 15px 0px
`
export const Bookmark = styled.div`
    background-color: rgba(0,0,0,0.5);
    padding: 5px;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Details = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const Heading = styled.h1`
    margin: 0px
`
export const Span = styled.span<productPreviewProps>`
  color: ${({ color }) => color};
  margin: 8px 0px;
  display: flex;
  align-items: center;
`;
export const Country = styled.div`
    margin: 0px;
    display: flex;
    align-items: center;
    img {
      font-size: 12px;
      color: red
    }
`

export const Quantity = styled.h1`
    color: #E63F07;
    font-weight: bold;
    margin: 0px 6px 0px;
`
export const SubInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`
export const Info = styled.div`
    display: flex;
    color: #666666;
    margin: 8px 0px;
   span {   
    margin-left: 8px;
    color: black
   }
`
export const ActionButtons = styled.div`
   display: flex;
   width: 100%;
`
