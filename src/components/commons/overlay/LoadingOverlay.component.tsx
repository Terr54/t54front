import { useTranslation } from 'react-i18next'
import Overlay from './Overlay.component'
import Spinner from '../loaders/spinner/Spinner.component'

export interface LoadingOverlayPropType {
  text: string
  [key: string]: any
}
function LoadingOverlay ({ text, ...props }: LoadingOverlayPropType) {
  const { t } = useTranslation()
  return (
		<Overlay {...props}>
			<Spinner size={8} />
			{ t(text) }
		</Overlay>
  )
}

export default LoadingOverlay
