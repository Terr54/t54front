import React from 'react'

import styles from './PrimaryAuthButton.module.css'

interface IProps {
  buttonName: string
  /**
     * Set this to change Button theme properties
     * @default primary
     */
  theme: | 'primary'
  | 'secondary'
  | 'tertiary'
  onClick: () => void
}

function PrimaryAuthButton ({ buttonName, theme, onClick }: IProps) {
  return (
		<button type='submit' className={styles[theme]} onClick={onClick}>
			<span className={styles.btnTxt}>{buttonName}</span>
		</button>
  )
}

export default PrimaryAuthButton
