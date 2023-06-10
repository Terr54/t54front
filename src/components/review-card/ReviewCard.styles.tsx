import styled from '@emotion/styled';

export interface reviewCardProps {
  username?: string;
  rating?: number;
  ratedNum?: number;
  date?: string;
  message?: string;
  likes?: string;
  dislikes?: string;
  handleLikes?: () => void;
  handleDislikes?: () => void;
  attachments?: string[];
}

export const Container = styled.div`
    background-color: #F6F6F6;
    border-radius: 8px;
    padding: 16px;
    margin: 14px 0px
`
export const UserDetail = styled.div`
   display: flex;
   flex-direction: column;
`
export const Heading = styled.div`
   display: flex;
   justify-content: space-between;
`
export const Username = styled.h5`
   margin: 0px;
`
export const Date = styled.span`
   font-size: 12px;
   color: #666666;
   margin: 6px 0px;
`
export const Message = styled.div`
   p {
    margin-left: 0px;
    margin-right: 0px;
    font-size: 14px;
   }
`
export const Attachments = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const Reactions = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Likes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
