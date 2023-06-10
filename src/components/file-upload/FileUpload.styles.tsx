import styled from '@emotion/styled';
import { ChangeEvent, ReactNode } from 'react';

export interface fileUploadProps {
  type?: string;
  accept?: string
  uploading?: boolean;
  filename?: string;
  label?: string;
  size?: string;
  height?: string;
  margin?: string;
  onChange?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  value?: string;
  color?: string;
  children?: ReactNode | ReactNode[]
}

interface spanProps {
  color?: string;
}

export const Container = styled.div<fileUploadProps>`
  display: flex;
  align-items: center;
  height: ${({ height }) => height};
  border: 1px dashed #D1D1D1;
  border-radius: 6px;
  overflow: hidden;
  margin: ${({ margin }) => margin};
  input {
    display: none;
  }
  label {
    width: 100%;
    padding: 10px;
    display: flex;
    font-size: 11px;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }
`;

export const Content = styled.div`
    /* display: flex; */
    width: 100%;
    padding-left: 10px;
`
export const InfoSize = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
`

export const Span = styled.span<spanProps>`
  font-size: 10px;
  width: 100%;
  color: ${({ color }) => color};
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`
