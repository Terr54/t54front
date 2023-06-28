import styled from '@emotion/styled';
export interface cartItemProps {
  heading?: string;
  height?: string;
  country?: string;
  color?: string;
  quantity?: string;
  MOQ?: string;
  packaging?: string;
  processing?: string;
  incoterm?: string;
  type?: string;
  countryFlag?: string;
  selected?: boolean;
  onSelect?: () => void;
  onUnSelect?: () => void;
  cover?: string;
}

export const Container = styled.div`
  width: 100%;
  border-radius: 11px;
  box-sizing: border-box;
  padding: 14px;
  background: #fff;
  min-height: 172px;
  display: flex;
  margin-bottom: 10px;
`;
export const Image = styled.div`
  width: 75px;
  height: 75px;
  margin: 0px 10px;
  img {
    width: 100%;
    border-radius: 3px;
  }
`;
export const TitleDelete = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Title = styled.span`
  margin: 0px;
  font-weight: 600px;
`;
export const Span = styled.span`
  margin: 8px 0px;
  display: flex;
  align-items: center;
`;
export const Country = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 8px;
`;
export const Type = styled.div`
  border: 1px solid #86b817;
  background: #f6f9ed;
  padding: 2px;
  border-radius: 3px;
  font-size: 9px;
  width: 26%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Counters = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  width: 16%;
  margin: 0px 6px;
  padding: 4px;
  text-align: center;
  :focus {
    border: 1px solid #d9d9d9;
    outline: none;
  }
`;
export const Amount = styled.span`
  font-weight: bold;
  color: #e63f07;
  margin: 0px;
  font-size: 22px;
  @media screen and (max-width: 767px) {
    margin-top: 15px;
  }
`;
