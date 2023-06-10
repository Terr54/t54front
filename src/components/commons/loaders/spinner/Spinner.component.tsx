import type { SpinnerPropType } from './Spinner.styles'
import { StyledSpinner } from './Spinner.styles'

function Spinner ({ size = 5, animationDuration = 1, fillColor = '#ccc', strokeColor = '#3498db', ...props }: SpinnerPropType) {
  return (
		<StyledSpinner filleColor={fillColor} strokeColor={strokeColor} size={size} animationDuration={animationDuration} {...props} />
  )
}

export default Spinner
