import { useTranslation } from 'react-i18next';

export const TermsOfServicePage = () => {
  const { t } = useTranslation();
  return (
        <div style={{ margin: 25 }}>
            <h1>{t('terms-title')}</h1>
            <h4>{`${t('last-updated')}: 14/03/2022`}</h4>
            <section>
                <h3>{t('terms-article-1')}</h3>
                <p>
                    <span>{t('terms-article-1-p1-1')}</span>
                    <a href="https://www.terre54.co" target="__blank">https://www.terre54.co (« Site »)</a>
                    <span>{t('terms-article-1-p1-2')}</span>
                </p>
                <p>
                    <span>{t('terms-article-1-p2-1')}</span>
                    <a href="tel:+33760926545">+33760926545</a>
                    <span>{t('terms-article-1-p2-2')}</span>
                    <a href="mailto: contact@terre54.co">contact@terre54.co</a>
                </p>
            </section>
            <section>
                <h3>{t('terms-article-2')}</h3>
                <p>{t('terms-article-2-p1')}</p>
                <p>{t('terms-article-2-p2')}</p>
            </section>
            <section>
                <h3>{t('terms-article-2.1')}</h3>
                <p>{t('terms-article-2-p1')}</p>
                <p>{t('terms-article-2-p2')}</p>
            </section>
        </div>
  )
};

export default TermsOfServicePage;
