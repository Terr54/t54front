import { StyledLogoBox, StyledLogo } from './Logo.styles';
import Terre54Logo from '../../../assets/pictures/Terre54Logo.png';
import { Link } from 'react-router-dom';
import { path } from '../../../routes/paths';

export interface LogoProps {
  height: number;
  width: number;
}

const Logo = ({ height, width }: LogoProps) => {
  return (
    <Link to={path.LANDING}>
      <StyledLogoBox height={height} width={width}>
        <StyledLogo src={Terre54Logo} alt="Terre 54 Logo" />
      </StyledLogoBox>
    </Link>
  );
};

export default Logo;
