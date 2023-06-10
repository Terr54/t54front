import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Wrapper from '../../../components/admin/wrapper/Wrapper.component';
import banner from '../../../assets/pictures/banner.png';
import BackButton from '../../../components/commons/back-button/BackButton.component';
import Avatar from '../../../components/commons/avatar/Avatar.component';
import classes from './MyAccount.module.css';
import Button from '../../../components/commons/controls/button/Button.component';
import Input from '../../../components/commons/input/Input.component';
import signature from '../../../assets/pictures/signature.png';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../store';
import { uploadProfilePictureAction } from '../../../store/features/slices/user';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const infoTabs = [
    {
      id: 0,
      label: 'personal-information'
    },
    {
      id: 1,
      label: 'company-information'
    }
  ];

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState<number>(0);
  const [preview, setPreview] = useState<any>(null);

  const userPayload = useSelector((state) => state.user.payload);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files);
    const previewImg = URL.createObjectURL(e.target.files[0]);
    setPreview(previewImg);
    dispatch(uploadProfilePictureAction(e.target.files[0]));
  };

  return (
    <Wrapper renderPath={() => <BackButton text={t('go-back')} onClick={() => navigate(-1)} />}>
      <div className={classes.imageDiv}>
        <img
          src={userPayload?.profile?.picture ?? banner}
          alt="banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>
        <Avatar
          size="100px"
          style={{
            flexDirection: 'column',
            display: 'flex',
            position: 'relative',
            top: '-3.2em',
            backgroundColor: 'white',
            border: '2px solid #E63F07',
            overflow: 'hidden',
            zIndex: 2000
          }}
          username={`${userPayload?.profile?.firstName ?? ''} ${
            userPayload?.profile?.lastName ?? ''
          }`}
          verified
          renderButton={() => (
            <Button
              text={t('edit-profile')}
              color="#E63F07"
              border="1px solid #E63F07"
              bgColor="#fff"
              width="12%"
            />
          )}
          onChange={(e) => handleChange(e)}
          src={userPayload?.profile?.picture ?? preview}
          id='upload'
        />
      <div className={classes.infos}>
        <div className={classes.infoTabs}>
          {infoTabs.map((info) => (
            <div
              onClick={() => setActiveTab(info.id)}
              className={
                activeTab === info.id
                  ? `${classes.info} ${classes.infoActive}`
                  : classes.info
              }
              key={info.id}
            >
              {t(info.label)}
            </div>
          ))}
        </div>
        {activeTab === 0 && (
          <div className={classes.inputs}>
            <div className={classes.leftInputs}>
              <Input
                label={t('full-name')}
                placeholder={t('full-name')}
                defaultValue={`${userPayload?.profile?.firstName ?? ''} ${
                  userPayload?.profile?.lastName ?? ''
                }`}
              />
              <Input
                label={t('email')}
                placeholder={t('email')}
                defaultValue={`${userPayload?.user?.email ?? ''}`}
                pointerEvents='none'
              />
              <Input
                label={t('phone-number')}
                placeholder={t('phone-number')}
                defaultValue={`${userPayload?.profile?.phone ?? ''}`}
              />
            </div>
            <div className={`${classes.leftInputs} ${classes.rightInputs}`}>
              <Input label={t('nationality')} placeholder={t('nationality')} />
              <Input
                label={t('role-at-company')}
                placeholder={t('role-at-company')}
              />
              <Input
                label={t('social-media')}
                placeholder={t('social-media')}
                iconAfter
                renderIcon={() => <LinkedInIcon />}
              />
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className={classes.inputs}>
            <div className={classes.leftInputs}>
              <Input
                label={t('company-name')}
                placeholder={t('company-name')}
                defaultValue={`${
                  userPayload?.supplierProfile?.merchantName ?? ''
                }`}
              />
              <Input
                label={t('company-email')}
                placeholder={t('company-email')}
                defaultValue={`${userPayload?.user?.email ?? ''}`}
              />
              <Input
                label={t('company-phone-number')}
                placeholder={t('company-phone-number')}
                defaultValue={`${userPayload?.supplierProfile?.phone ?? ''}`}
              />
              <Input
                label={t('company-address')}
                placeholder={t('company-address')}
                defaultValue={`${userPayload?.supplierProfile?.address ?? ''}`}
              />
            </div>
            <div className={`${classes.leftInputs} ${classes.rightInputs}`}>
              <Input label={t('tax-id')} placeholder={t('tax-id')} />
              <Input
                label={t('certificate-of-incorporation')}
                placeholder={t('certificate-of-incorporation')}
              />
              <Input
                label={t('warehouse-address')}
                placeholder={t('warehouse-address')}
              />
              <Input label={t('industry')} placeholder={t('industry')} />
            </div>
          </div>
        )}
      </div>
      <div className={classes.signature}>
        <span>{t('signature')}</span>
        <img src={signature} style={{ width: '100px', height: '60px' }} />
      </div>
    </Wrapper>
  );
};

export default MyAccount;
