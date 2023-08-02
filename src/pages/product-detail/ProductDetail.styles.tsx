import styled from '@emotion/styled';

export interface productDetailProps {
  contentPadding?: string;
  height?: string;
  bgColor?: string
}

export const Container = styled.div``;
export const Steps = styled.div`
  display: flex;
`;
export const Main = styled.div<productDetailProps>`
  box-sizing: border-box;
  background-color: ${({ bgColor }) => bgColor ?? '#f6f9ed'};
  padding: 14px;
  height: ${({ height }) => height ?? 'auto'};
`;
export const Content = styled.div<productDetailProps>`
  background-color: white;
  box-sizing: border-box;
  border-radius: 8px;
  padding: ${({ contentPadding }) => contentPadding ?? '14px'};
  height: 100%;
`;
export const Documents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Accordions = styled.div`
  margin-top: 6px;
`;
export const Specs = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Spec = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0px;
  p {
    margin: 0px;
    margin-right: 10px;
    color: #666666;
  }
`;
export const Label = styled.span`
  margin: 0px;
  color: #666666;
  font-weight: 600;
`;
export const Companies = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: 'wrap';
  margin: 6px 0px;
  p {
    margin: 0px;
    margin-right: 10px;
    color: #666666;
  }
`;
export const Company = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`;
export const Image = styled.div`
  width: 50px;
  height: 50px;
  background-color: #98befe;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const CompanyTitle = styled.div`
  text-align: center;
  margin-top: 8px;
  font-weight: 600;
  color: rgba(33, 15, 4, 1);
  font-size: 14px;
`;
export const HR = styled.div`
  width: 100%;
  border-top: 1px solid rgba(232, 232, 232, 1); ;
`;
export const CompanyCost = styled.div`
  color: #e63f07;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  min-width: 10%;
  h2 {
    margin: 0px;
  }
`;
export const ReviewHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 20px;
`;
export const RateHeading = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
`;
export const Reviews = styled.div`
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
  display: none;
}
`;
