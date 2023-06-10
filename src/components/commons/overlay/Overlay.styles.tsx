import type { ReactNode } from 'react'
import styled from '@emotion/styled'

export interface OverlayPropType {
  isDark?: boolean
  children: ReactNode | ReactNode[]
  [key: string]: any
}
export const StyledOverlay = styled.div<OverlayPropType>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 11000;
    overflow: hidden;
    background: rgba(0,0,0, ${({ isDark }) => (isDark ? '0.6' : '0.2')});
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    & > * {
        margin-bottom: 15px;
    }
`
