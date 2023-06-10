import styled from '@emotion/styled';

export interface aboutUsProps {
  bgImage?: string;
  margintop?: string;
  teamImage?: string;
  missionImage?: string;
}

export const Container = styled.div`
`
export const TeamMembers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  width:20vw;
   @media (max-width: 768px) {
    width: 90%
  };
`
export const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
   @media (max-width: 768px) {
    flex-direction: column;
  };
`
export const TeamMemberName = styled.div`
  width: 100%;
  height: 90px;
  background-color: #210F04;
  color: white;
  dislay: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 0px 0px 20px 20px;
`;

export const TeamMembersImage = styled.div<aboutUsProps>`
  background-image: ${({ teamImage }) => `url(${teamImage})`};
  width: 100%;
  background-size: cover;
  height: 350px;
  border-radius: 20px 20px 0px 0px;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  border-radius: 10px;
   @media (max-width: 768px) {
    column-gap: 8px;
    grid-template-columns: repeat(1, 1fr);
  };
  `
export const Background = styled.div<aboutUsProps>`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  border-radius: 10px;
  width:30vw;
  height:40vh;
   @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  };
  `
export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  margin: 30px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
  };
`
export const MissionImage = styled.div<aboutUsProps>`
  background-image: ${({ missionImage }) => `url(${missionImage})`};
  width: 100%;
  background-size: cover;
  height: 350px;
  @media (max-width: 768px) {
   margin: auto;
  };
`;
