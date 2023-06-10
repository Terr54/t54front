import React from 'react'
import styles from './SocialButton.module.css'

interface Iprops {
  children: React.ReactNode
  [key: string]: any
}

function SocialButton ({ children, ...props }: Iprops) {
  return (
		<div tabIndex={0} role='button' className={styles.main} {...props}>
			{children}
		</div>
  )
}

export default SocialButton
