import React from 'react'
import { Container, Counter, Icon, notificationProps } from './Notification.styles'

const Notification = ({
  renderIcon,
  counter,
  bgColor = '#F6F6F6',
  onClick,
  padding,
  margin,
  width = '34px',
  height = '34px',
  borderRadius = '50%',
  cBgColor = '#E63F07',
  cPadding = '2px',
  cBorderRadius = '3px',
  counterStyle,
  cWidth = '10px',
  cHeight = '10px',
  cColor
}: notificationProps) => {
  return (
    <Container
      bgColor={bgColor}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      <Icon>
      {renderIcon?.()}
      </Icon>
      {counter &&
        <Counter
        cBgColor={cBgColor}
        cPadding={cPadding}
        cBorderRadius={cBorderRadius}
        cColor={cColor}
        style={counterStyle}
        cWidth={cWidth}
        cHeight={cHeight}
      >
        {counter}
      </Counter>
      }
    </Container>
  )
}

export default Notification
