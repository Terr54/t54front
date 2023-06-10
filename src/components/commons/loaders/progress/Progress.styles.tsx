import styled from '@emotion/styled'

export interface ProgressPropType {
  round?: boolean
  color?: string
  width?: string | number
  height?: string | number
  background?: string
  roundMeter?: boolean
  [key: string]: any
}
const getHeight = (height: string | number | undefined) => {
  if (height) {
    return (typeof height === 'string' ? height : `${height}px`)
  }

  return '20px'
}

export const StyledMeter = styled.div<ProgressPropType>`
    height: ${({ height }) => getHeight(height)};
    position: relative;
    background: ${({ background }) => background ?? '#555'};
    border-radius: ${({ round }) => (round ? '25px' : '0')};
    padding: 1px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`

export const StyledProgress = styled.span<ProgressPropType>`
    display: block;
    height: 100%;
    border-top-right-radius: ${({ round, width }) => (round && width !== '100%' ? '8px' : '0')};
    border-bottom-right-radius: ${({ round, width }) => (round && width !== '100%' ? '8px' : '0')};
    border-top-left-radius: ${({ round }) => (round ? '20px' : '0')};
    border-bottom-left-radius: ${({ round }) => (round ? '20px' : '0')};
    background-color: ${({ color }) => color ?? 'var(--color-primary, rgb(43,194,83))'};
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
    transition: width 0.5s;
`
