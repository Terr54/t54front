import type { ChangeEvent } from 'react';
import { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './Login.module.css';
import Input from '../../../components/commons/input/Input.component';
import PrimaryAuthButton from '../../../components/commons/primaryAuthButton/PrimaryAuthButton.component';
import { checkEmail } from '../../../utils/emailChecker';
import { useSelector, useDispatch } from '../../../store';
import { loginUserAction } from '../../../store/features/slices/user';
import { path } from '../../../routes/paths';
import { stopLoading } from '../../../store/features/slices/loader/loader.slice';
import Footer from '../../../components/Footer/Footer';

function Login () {
  const [data, setData] = useState<{ email: string, password: string }>({
    email: '',
    password: ''
  })

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const { loading, errors } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  const login = () => {
    const { email, password } = data
    let hasError = false
    setEmailError('')
    setPasswordError('')

    if (!checkEmail(email)) {
      setEmailError('Please enter a valid email')
      hasError = true
    }

    if (password.length < 6) {
      setPasswordError('Password must have at least 6 characters')
      hasError = true
    }

    if (hasError) {
      return false
    }

    dispatch(loginUserAction(data))
      .unwrap()
      .then(() => {
        navigate(path.LANDING)
      })
      .catch(err => {
        dispatch(stopLoading())
        setEmailError(t(err.code ?? ''))
      })

    return true
  }

  return (
		<div className={classes.login}>
			<div className={classes.mainComponent}>
				<span className={classes.activityText}>Login to your account</span>
        {
          errors?.length
            ? (
            <ul style={{ color: '#f33' }}>
              { errors.map(e => <li key={e?.code}>{e?.message}</li>)}
            </ul>
              )
            : null
        }
				<Input
					name='email'
					placeholder='Email'
					type='email'
					onChange={handleChange}
					errorFound={emailError.length > 0}
					errorMessage={emailError}
				>
					<MailIcon />
				</Input>
				<Input
					name='password'
					placeholder='Password'
					type='password'
					onChange={handleChange}
					errorFound={passwordError.length > 0}
					errorMessage={passwordError}
				>
					<LockIcon />
				</Input>
				<br />
				{
					loading
					  ? <span>Loading....</span>
					  : <PrimaryAuthButton buttonName='Login' onClick={login} theme='primary' />
				}
				<span className={classes.forgotPassword}>Forgot Password?</span>
				<div style={{ justifyContent: 'center' }} className={classes.iconsContainer}>
				</div>
				<br />
				<div className={classes.otherOptions}>
					<span className={classes.dontHave}>Don't have an account?</span>
					<span className={classes.createNew}>Create an account</span>
				</div>
				<Footer />
			</div>
			<div className={classes.loginSideImg} />
		</div>
  )
}

export default Login
