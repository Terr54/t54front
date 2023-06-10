import styled from '@emotion/styled'
import { ReactNode } from 'react';

export interface radioTextsProps {
  onClick?: () => void;
  children?: ReactNode | ReactNode[]
}

export const RadioTexts = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
font-size: 12px;
margin-bottom: 20px;
margin-top: 10px;
`
export const RadioTextCon = styled.div<radioTextsProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        margin-left: 10px;
    }
`
