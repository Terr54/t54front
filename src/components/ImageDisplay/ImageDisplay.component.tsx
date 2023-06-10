import styles from './ImageDisplay.module.css'

interface ImageDisplayProps {
  src: string
}

const ImageDisplay = ({ src }: ImageDisplayProps) => (
	<div className={styles.image_display__box}>
		<img src={src} alt='small-preview' />
	</div>
)

export default ImageDisplay
