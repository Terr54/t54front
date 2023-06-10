import type { ProgressPropType } from './Progress.styles'
import { StyledMeter, StyledProgress } from './Progress.styles'

function Progress ({
  round = false,
  color = '#3a3',
  width = '0%',
  height = '10px',
  background = '#555',
  roundMeter = false,
  ...props
}: ProgressPropType) {
  return (
		<StyledMeter
			round={roundMeter}
			height={height}
			background={background}
			{...props}
		>
			<StyledProgress
				width={width}
				style={{ width }}
				round={round}
				color={color}
			/>
		</StyledMeter>
  )
}

export default Progress
