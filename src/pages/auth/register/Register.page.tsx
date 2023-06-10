// import type { ChangeEvent } from 'react'
// import React, { useState, useEffect } from 'react'
// import GoogleIcon from '@mui/icons-material/Google'
// import LockIcon from '@mui/icons-material/Lock'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
// import MailIcon from '@mui/icons-material/Mail'
// import PersonIcon from '@mui/icons-material/Person'
// import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
// import { useNavigate } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'
// import { checkEmail } from '../../../utils/emailChecker'
// import { path } from '../../../routes/paths'
// import { stopLoading } from '../../../store/features/slices/loader/loader.slice'

// import styles from './Register.module.css'
// import PrimaryAuthButton from '../../../components/commons/primaryAuthButton/PrimaryAuthButton.component'
// import SocialButton from '../../../components/commons/socialButton/SocialButton.component'
// import Input from '../../../components/commons/input/Input.component'
// import type { RootState } from '../../../store'
// import { useSelector, useDispatch } from '../../../store'
// import {
//   registerUserAction,
//   socialAuthAction
// } from '../../../store/features/slices/user'
// import { initGoogle } from '../../../utils/google'
// import { initFB } from '../../../utils/facebook'
// import appConfig from '../../../config'

// function Register () {
//   const [data, setData] = useState<{
//     firstName: string
//     lastName: string
//     email: string
//     password: string
//     confirmPassword: string
//   }>({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     confirmPassword: ''
//   })

//   const [emailError, setEmailError] = useState<string>('')
//   const [passwordError, setPasswordError] = useState<string>('')
//   const [firstNameError, setFirstNameError] = useState<string>('')
//   const [lastNameError, setLastNameError] = useState<string>('')
//   const [confirmPasswordError, setConfirmPasswordError] = useState<string>('')
//   const [, setFB] = useState<any>(null)

//   const loading = useSelector((state: RootState) => state.loader.loading)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { t } = useTranslation()
//   const googleBtnId = 'google_btn_120'

//   const handleChange = (
//     event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
//   ) => {
//     setData({ ...data, [event.target.name]: event.target.value })
//   }

//   useEffect(() => {
//     const { google, facebook } = appConfig
//     initGoogle({
//       config: {
//         url: google.control_server_url,
//         client_id: google.client_id
//       },
//       onGoogleAuth (auth) {
//         dispatch(socialAuthAction(['google', { credentials: auth.credential }]))
//           .unwrap()
//           .then(() => {
//             navigate(path.LANDING)
//           })
//           .catch(err => {
//             dispatch(stopLoading())
//             setEmailError(t(err.code ?? ''))
//           })
//       },
//       googleBtnId
//     })
//     void initFB(facebook.app_id).then(fb => {
//       setFB(fb)
//     })
//   }, [])

//   const register = () => {
//     const {
//       firstName, lastName, email, password, confirmPassword
//     } = data
//     let hasError = false
//     setEmailError('')
//     setPasswordError('')
//     setConfirmPasswordError('')

//     if (firstName.length < 3) {
//       setFirstNameError('First name must be at least 3 characters')
//       hasError = true
//     }

//     if (lastName.length < 3) {
//       setLastNameError('Last name must be at least 3 characters')
//       hasError = true
//     }

//     if (!checkEmail(email)) {
//       setEmailError('Please enter a valid email')
//       hasError = true
//     }

//     if (password.length < 6) {
//       setPasswordError('Password must have at least 6 characters')
//       hasError = true
//     }

//     if (password !== confirmPassword || confirmPassword.length === 0) {
//       setConfirmPasswordError('Passwords do not match')
//       hasError = true
//     }

//     if (hasError) {
//       return false
//     }

//     const registerData = {
//       firstName,
//       lastName,
//       email,
//       password
//     }

//     dispatch(registerUserAction([registerData]))
//       .unwrap()
//       .then(res => {
//         navigate(path.LANDING)
//       })
//       .catch(err => {
//         dispatch(stopLoading())
//         setEmailError((err.code ?? ''))
//       })

//     return true
//   }

//   return (
// 		<div className={styles.mainComponent}>
// 			<span
// 				aria-hidden
// 				onClick={() => {
// 				  navigate(path.LOGIN)
// 				}}
// 				className={styles.registerHere}
// 			>
//         Login here
// 			</span>
// 			<span className={styles.learnerColab}>LearnerCollab</span>
// 			<Input
// 				name='firstName'
// 				placeholder='First name'
// 				type='email'
// 				onChange={handleChange}
// 				errorFound={firstNameError.length > 0}
// 				errorMessage={firstNameError}
// 			>
// 				<PersonIcon />
// 			</Input>
// 			<Input
// 				name='lastName'
// 				placeholder='Last name'
// 				type='email'
// 				onChange={handleChange}
// 				errorFound={lastNameError.length > 0}
// 				errorMessage={lastNameError}
// 			>
// 				<PersonRoundedIcon />
// 			</Input>
// 			<Input
// 				name='email'
// 				placeholder='Email'
// 				type='email'
// 				onChange={handleChange}
// 				errorFound={emailError.length > 0}
// 				errorMessage={emailError}
// 			>
// 				<MailIcon />
// 			</Input>
// 			<Input
// 				name='password'
// 				placeholder='Password'
// 				type='password'
// 				onChange={handleChange}
// 				errorFound={passwordError.length > 0}
// 				errorMessage={passwordError}
// 			>
// 				<LockIcon />
// 			</Input>
// 			<Input
// 				name='confirmPassword'
// 				placeholder='Confirm Password'
// 				type='password'
// 				onChange={handleChange}
// 				errorFound={confirmPasswordError.length > 0}
// 				errorMessage={confirmPasswordError}
// 			>
// 				<LockIcon />
// 			</Input>
// 			{loading
// 			  ? (
// 				<span>Loading....</span>
// 			    )
// 			  : (
// 				<PrimaryAuthButton
// 					buttonName='Confirm'
// 					onClick={register}
// 					theme='primary'
// 				/>
// 			    )}
// 			<span className={styles.orText}>OR</span>
// 			<div className={styles.iconsContainer}>
// 				<SocialButton id={googleBtnId}>
// 					<GoogleIcon fontSize='large' />
// 				</SocialButton>
// 				<SocialButton>
// 					<FacebookRoundedIcon fontSize='large' />
// 				</SocialButton>
// 				<SocialButton>
// 					<TwitterIcon fontSize='large' />
// 				</SocialButton>
// 			</div>
// 		</div>
//   )
// }

// export default Register

const Register = () => <div>hello</div>

export default Register
