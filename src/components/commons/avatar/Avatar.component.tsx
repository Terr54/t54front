import React from 'react';
import { avatarProps, Container, Main, Details, Upload } from './Avatar.styles';
import pic from '../../../assets/pictures/profile-placeholder.png';
import VerifiedIcon from '@mui/icons-material/Verified';

const Avatar = ({
  src,
  onClick,
  bgColor = '',
  padding = '2px',
  margin,
  border,
  size = '32px',
  borderRadius = '50%',
  detailsMargin = '12px 0 0',
  paddingLeft = '16px',
  username,
  renderButton,
  verified = true,
  style,
  onChange,
  id,
  ...props
}: avatarProps) => {
  return (
    <Main paddingLeft={username && paddingLeft} {...props}>
      <Upload id={id} type='file' accept='image/*' onChange={(e) => onChange?.(e)} />
      <Container
        onClick={onClick}
        bgColor={bgColor}
        padding={padding}
        size={size}
        borderRadius={borderRadius}
        border={border}
        margin={margin}
        style={style}
        htmlFor={id}
      >
        <img src={src ?? pic} alt="profile" />
      </Container>
      {username && (
        <Details detailsMargin={detailsMargin}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2>{username}</h2>
            {verified && <VerifiedIcon style={{ color: '#1071FF' }} />}
          </div>
          {renderButton?.()}
        </Details>
      )}
    </Main>
  );
};

export default Avatar;
