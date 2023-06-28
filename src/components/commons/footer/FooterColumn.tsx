import { useTranslation } from 'react-i18next';
import {
  ColumnContainer,
  Label,
  SoonTag,
  footerColumnProps,
  StyledFooterLink,
} from './Footer.styles';
import Button from '../controls/button/Button.component';
import { useNavigate } from 'react-router-dom';

const FooterColumn = ({
  values,
  heading,
  comingSoon,
  isBlog,
}: footerColumnProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ColumnContainer>
      <h3>{heading}</h3>
      {values.map((item) =>
        item.to ? (
          <Button
            text={item.label}
            onClick={() =>
              isBlog && item.id
                ? navigate(`/blog/cultivation/${item.id}`)
                : navigate(item.to)
            }
            bgColor='transparent'
            style={{ justifyContent: 'flex-start', paddingLeft: '0' }}
          />
        ) : (
          // <StyledFooterLink key={`${item.id}${item.label}`} href={item.to}>
          //   <Label>
          //     <p>{item.label}</p>
          //     {comingSoon && <SoonTag>{t('footer-coming-soon')}</SoonTag>}
          //   </Label>
          // </StyledFooterLink>
          <Label key={`${item.id}${item.label}`}>
            <p>{item.label}</p>
            {comingSoon && <SoonTag>{t('footer-coming-soon')}</SoonTag>}
          </Label>
        )
      )}
    </ColumnContainer>
  );
};

export default FooterColumn;
