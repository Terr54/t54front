import type { OverlayPropType } from './Overlay.styles'
import { StyledOverlay } from './Overlay.styles'

function Overlay ({ children, ...props }: OverlayPropType) {
  return (
		<StyledOverlay {...props}>
			{ children }
		</StyledOverlay>
  )
}

export default Overlay
