import styled from '@emotion/styled';
import { ReactNode } from 'react'
export interface radioButtonProps {
  options?: Array<{ id: number; title: string; }>;
  active?: boolean;
  activeBgColor?: string;
  activeTab?: string,
  onClick?: () => void;
  children?: ReactNode | ReactNode[]
}

export const Container = styled.div``;
export const ServicesContainer = styled.div`
  display: flex;
  gap: 1vw;
  padding-top: 10px;
  margin-bottom: 12px;
   @media (max-width: 768px) {
    padding-top: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  };
`;
export const MerchantActions = styled.div`
  display: flex;
  margin-top: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  };
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  };
`;
export const ActionCount = styled.div`
  width: 100%;
  font-weight: bold;
  text-align: left;
  color: #E63F07;
  font-size: 25px;
  margin-bottom: 4px
`;
export const Left = styled.div`
  float: left;
`;
export const Right = styled.div`
  float: right;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  };
`;
export const RadioContainer = styled.div<radioButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RButtons = styled.div<radioButtonProps>`
  background-color: rgba(249, 249, 249, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
export const Option = styled.div<radioButtonProps>`
  background-color: ${({ active }) =>
    active ? 'rgba(230, 63, 7, 1)' : 'transparent'};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  font-size: 12px;
  color: ${({ active }) =>
    active ? '#fff' : ' #210F04'};
    cursor: pointer;
`;
