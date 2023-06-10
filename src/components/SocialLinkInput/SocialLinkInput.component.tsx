import type { ChangeEvent } from 'react'
import React from 'react'
import styles from './SocialLinkInput.module.css'

interface IProps {
  [key: string]: any
  name: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SocialLinkInput: React.FC<IProps> = ({
  name, onChange, placeholder, ...inputProps
}) => (
	<div className={styles.main}>
		<input onChange={onChange} type='text' name={name} className={styles.input} placeholder={placeholder} {...inputProps} />
	</div>
)

export default SocialLinkInput
