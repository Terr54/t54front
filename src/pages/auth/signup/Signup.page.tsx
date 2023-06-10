import React, { ChangeEvent, useEffect, useState } from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AuthWrapper from '../../../components/commons/auth-form/AuthWrapper.component';
import Button from '../../../components/commons/controls/button/Button.component';
import Input from '../../../components/commons/input/Input.component';
import {
  StyledShowText,
  StyledHaveAccount,
  RadioTexts,
  RadioText,
  PrivacyText,
  PrivacyAction,
  ActionButtons,
  CookieContent
} from './Signup.styles';
import { useNavigate } from 'react-router-dom';
import { path } from '../../../routes/paths';
import queryStr from '../../../utils/queryStr';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../store';
import {
  registerSupplierAction,
  registerUserAction
} from '../../../store/features/slices/user';
import { GooglePlaceInput } from '../../../components/google-places/GooglePlaceInput.component';
import { GeoAddress } from '../../../components/google-places/types';
import { toastErrors } from '../../../store/util';
import ModalWrapper from '../../../components/modal-wrapper/ModalWrapper.component';
type Tab = 'buyer' | 'seller';
const Signup = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loader);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sellerFirstName, setSellerFirstName] = useState('');
  const [sellerLastName, setSellerLastName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPassword, setSellerPassword] = useState('');
  const [isEmailValid, setEmailValid] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false)

  const [phone, setPhone] = useState('');
  const [merchantName, setMerchantName] = useState('');
  const [place, setPlace] = useState<GeoAddress>();

  const [tab, setTab] = useState<Tab>('buyer');

  useEffect(() => {
    const tt = queryStr.params?.t;
    setTab(tt === 'seller' ? 'seller' : 'buyer');
    if (queryStr.params?.e) {
      setEmail(window.atob(queryStr.params?.e));
      setEmailValid(true);
    }
  }, []);

  useEffect(() => {
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
    }, 7000)
  }, [])

  const handleEmailChange = (e: ChangeEvent<Partial<HTMLInputElement>>) => {
    setEmailValid(e?.target?.validity?.valid ?? null);
    if (tab === 'buyer') {
      setEmail(e?.target?.value ?? '');
    } else {
      setSellerEmail(e?.target?.value ?? '');
    }
  };
  const handleSignupSupplier = () => {
    dispatch(
      registerSupplierAction({
        email: sellerEmail,
        firstName: sellerFirstName,
        lastName: sellerLastName,
        password: sellerPassword,
        phone,
        merchantName,
        place
      })
    )
      .unwrap()
      .then(() => {
        navigate(path.LANDING);
      })
      .catch((e) => {
        console.log('error', e);
        if (Array.isArray(e)) {
          toastErrors(e, t);
        }
      });
  };
  const handleSignUp = () => {
    if (tab === 'buyer') {
      dispatch(
        registerUserAction({
          email,
          firstName,
          lastName,
          password
        })
      )
        .unwrap()
        .then(() => {
          navigate(path.LANDING);
        })
        .catch((e) => {
          console.log('error', e);
          if (Array.isArray(e)) {
            toastErrors(e, t);
          }
        });
    } else {
      handleSignupSupplier();
    }
  };
  const validateBuyerInputs = () =>
    isEmailValid &&
    (firstName || sellerFirstName) &&
    (lastName || sellerLastName) &&
    (password || sellerPassword) &&
    (email || sellerEmail);
  const validateSupplierInputs = () =>
    validateBuyerInputs() && phone && place?.country && merchantName;

  return (
    <AuthWrapper heading={t('get-started-t54')}>
      <RadioTexts>
        <RadioText onClick={() => setTab('buyer')}>
          {tab === 'buyer'
            ? (
            <RadioButtonCheckedIcon
              style={{ fontSize: '15px', color: '#86B817' }}
            />
              )
            : (
            <RadioButtonUncheckedIcon
              style={{ fontSize: '15px', color: '#B3B3B3' }}
            />
              )}
          <span>{t('signup-buyer')}</span>
        </RadioText>
        <RadioText onClick={() => setTab('seller')}>
          {tab === 'seller'
            ? (
            <RadioButtonCheckedIcon
              style={{ fontSize: '15px', color: '#86B817' }}
            />
              )
            : (
            <RadioButtonUncheckedIcon
              style={{ fontSize: '15px', color: '#B3B3B3' }}
            />
              )}
          <span>{t('signup-seller')}</span>
        </RadioText>
      </RadioTexts>
      <Input
        placeholder={t('first-name')}
        label={t('first-name')}
        value={tab === 'buyer' ? firstName : sellerFirstName}
        onChange={(e) =>
          tab === 'buyer'
            ? setFirstName(e?.target?.value)
            : setSellerFirstName(e?.target?.value)
        }
      />
      <Input
        placeholder={t('last-name')}
        label={t('last-name')}
        value={tab === 'buyer' ? lastName : sellerLastName}
        onChange={(e) =>
          tab === 'buyer'
            ? setLastName(e?.target?.value)
            : setSellerLastName(e?.target?.value)
        }
      />
      <Input
        placeholder={t('email')}
        label={t('email')}
        value={tab === 'buyer' ? email : sellerEmail}
        onChange={handleEmailChange}
        hasError={isEmailValid != null && !isEmailValid}
        // disabled={tab === 'seller'}
      />
      <Input
        placeholder={t('password')}
        label={t('password')}
        type={showPassword ? 'text' : 'password'}
        renderIcon={() => (
          <StyledShowText onClick={() => setShowPassword(!showPassword)}>
            {t('show')}
          </StyledShowText>
        )}
        value={tab === 'buyer' ? password : sellerPassword}
        onChange={(e) =>
          tab === 'buyer'
            ? setPassword(e?.target?.value)
            : setSellerPassword(e?.target?.value)
        }
      />
      {tab === 'seller' && (
        <>
          <Input
            placeholder={t('phone')}
            label={t('phone')}
            value={phone}
            onChange={(e) => setPhone(e?.target?.value)}
          />
          <Input
            placeholder={t('merchant-name')}
            label={t('merchant-name')}
            value={merchantName}
            onChange={(e) => setMerchantName(e?.target?.value)}
          />
          <GooglePlaceInput
            label={t('address')}
            placeholder={t('type-to-select-address')}
            onSelect={(geo) => setPlace(geo)}
          />
        </>
      )}
      <Button
        text={t('signup')}
        bgColor='#E63F07'
        margin='45px 0px 15px'
        width='96%'
        onClick={handleSignUp}
        loading={loading}
        disabled={
          tab === 'buyer' ? !validateBuyerInputs() : !validateSupplierInputs()
        }
      />
      <PrivacyText>
        <span>
          {t('by-signing-agree')}{' '}
          <PrivacyAction onClick={() => navigate(path.TERMS_OF_SERVICE)}>
            {t('footer-terms-of-service')}
          </PrivacyAction>
        </span>
        <span>
          {t('of-use-and')}{' '}
          <PrivacyAction onClick={() => navigate(path.PRIVACY_POLICY)}>
            {t('footer-privacy-policy')}
          </PrivacyAction>
        </span>
      </PrivacyText>
      <StyledHaveAccount>
        <span>{t('already-have-account')}</span>
        <span tabIndex={0} onClick={() => navigate(path.SIGNIN)}>
          {t('sign-in')}
        </span>
      </StyledHaveAccount>
      <ModalWrapper heading={t('respect-cookie')} showModal={showModal} height={50} onClose={() => setShowModal(false)} onClick={() => setShowModal(false)}>
        <CookieContent>
          <div>
            <p style={{ lineHeight: '26px', textAlign: 'justify' }}>
              {t('respect-cookie-text')}{' '}
              <PrivacyAction style={{ textDecoration: 'underline', textTransform: 'lowercase' }} onClick={() => navigate(path.PRIVACY_POLICY)}>
                {t('footer-privacy-policy')}
              </PrivacyAction>
            </p>
          </div>
          <ActionButtons>
            <Button
              text={t('accept-cookies')}
              bgColor='#E63F07'
              margin='10px 0 10px'
              width='100%'
            />
            <Button
              text={t('reject-cookies')}
              bgColor='#fff'
              margin='0px 0px 10px'
              width='100%'
              border='1px solid #E63F07'
              color='#E63F07'
            />
          </ActionButtons>
        </CookieContent>
      </ModalWrapper>
    </AuthWrapper>
  );
};

export default Signup;
