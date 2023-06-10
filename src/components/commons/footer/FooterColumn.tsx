import { useTranslation } from 'react-i18next';
import {
  ColumnContainer,
  Label,
  SoonTag,
  footerColumnProps,
  StyledFooterLink
} from './Footer.styles';

const FooterColumn = ({ values, heading, comingSoon }: footerColumnProps) => {
  const { t } = useTranslation();

  return (
    <ColumnContainer>
      <h3>{heading}</h3>
      {values.map((item) => (
        item.to
          ? (
            <StyledFooterLink key={`${item.id}${item.label}`} href={item.to}>
              <Label>
                <p>{item.label}</p>
                {comingSoon && <SoonTag>{t('footer-coming-soon')}</SoonTag>}
              </Label>
            </StyledFooterLink>
            )
          : (
          <Label key={`${item.id}${item.label}`}>
            <p>{item.label}</p>
            {comingSoon && <SoonTag>{t('footer-coming-soon')}</SoonTag>}
          </Label>
            )
      ))}
    </ColumnContainer>
  );
};

export default FooterColumn;
