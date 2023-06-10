import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import AuthWrapper from '../../../components/commons/auth-form/AuthWrapper.component'
import Button from '../../../components/commons/controls/button/Button.component'
import Input from '../../../components/commons/input/Input.component'
import { path } from '../../../routes/paths'
import { useDispatch, useSelector } from '../../../store'
import { stopLoading } from '../../../store/features/slices/loader/loader.slice'
import { loginUserAction } from '../../../store/features/slices/user'
import { ForgetText, ShowText, HaveAccount } from './Signin.styles'

const Signin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const handleEmailChange = (e: string) => {
    setEmail(e);
  }
  const handlePasswordChange = (p: string) => {
    setPassword(p);
  }

  const login = () => {
    dispatch(loginUserAction({ email, password }))
      .unwrap()
      .then(() => {
        navigate(path.LANDING)
      })
      .catch(() => {
        dispatch(stopLoading())
      })
    return true
  }
  return (
      <AuthWrapper heading={t('sign-in-t54')}>
        <Input
          placeholder={t('email')}
          label={t('email')}
          onChange={(e) => handleEmailChange(e?.target?.value)}
          value={email}
        />
        <Input
          placeholder={t('password')}
          label={t('password')}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => handlePasswordChange(e?.target?.value)}
          renderIcon={() => (
            <ShowText onClick={() => setShowPassword(!showPassword)}>
              {t(`${showPassword ? 'hide' : 'show'}`)}
            </ShowText>
          )}
        />
        <ForgetText>{t('forgot-password')}</ForgetText>
        <Button
          onClick={login}
          text={t('sign-in-t54')}
          bgColor='#E63F07'
          margin='60px 0px'
          width='96%'
          loading={loading}
        />
        <HaveAccount>
          <span>{t('dont-have-account')}</span>
          <span tabIndex={0} onClick={() => navigate(path.SIGNUP)}>{t('sign-up')}</span>
        </HaveAccount>
      </AuthWrapper>
  )
}

export default Signin
