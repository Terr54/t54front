import styled from '@emotion/styled';
export interface teamProfileProps {
  profileImg?: string;
  name?: string;
  position?: string;
}

export const Container = styled.div<teamProfileProps>`
  color: #fff;
  background-image: ${({ profileImg }) => `url(${profileImg})`};
  width: 100%;
  height: 64vh;
  display: flex;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #210F04;
  span:nth-of-type(1) {
    font-size: 10px;
    margin-top: 3px
  }
`
