import styles from './Footer.module.css'
import Logo from '../commons/logo/Logo'
import { Link } from 'react-router-dom';
import { path } from '../../routes/paths';
const Footer = () => {
  return (
		<div className={styles.footer}>
			<div className={styles.footerContent}>
				<Logo width={81} height={49}/>
				<Link to={path.ABOUT} />
				<div className={styles.footerText}>
					<p>
						<span>Copyright@Mungwin.com</span>
					</p>
				</div>
			</div>
		</div>
  )
}

export default Footer
