import React from 'react'
import styles from './VerifyEmail.module.css'

function VerifyEmail () {
  return (
		<div className={styles.mainComponent}>
			<span className={styles.loginHere}>Login here</span>
			<span className={styles.welcome}>Welcome</span>
			<p>Check your email at johndoe@gmail.com to get email verification link</p>
		</div>
  )
}

export default VerifyEmail
