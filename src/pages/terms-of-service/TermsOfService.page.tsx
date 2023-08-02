import { useTranslation } from 'react-i18next';
import './terms-of-service.css';
import React from 'react';

export const TermsFragment = ({
  heading,
  text,
  children,
}: {
  heading: string;
  text: string;
  children?: React.ReactNode;
}) => {
  const { t } = useTranslation();

  return (
    <section>
      <h3>{t(`${heading}`)}</h3>
      <p>
        {t(`${text}`)} {children}
      </p>
    </section>
  );
};

export const TermsOfServicePage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: 25, paddingTop: 15 }}>
      <h2>{t('terms-title')}</h2>
      <h4>{`${t('last-updated')}: 14/03/2022`}</h4>
      <section>
        <h3>{t('terms-article-1')}</h3>
        <p>
          <span>{t('terms-article-1-p1-1')}</span>
          <a href='https://www.terre54.co' target='__blank'>
            https://www.terre54.co (« Site »)
          </a>
          <span>{t('terms-article-1-p1-2')}</span>
        </p>
        <p>
          <span>{t('terms-article-1-p2-1')}</span>
          <a href='tel:+33760926545'>+33760926545</a>
          <span>{t('terms-article-1-p2-2')}</span>
          <a href='mailto: contact@terre54.co'>contact@terre54.co</a>
        </p>
      </section>
      <section>
        <h3>{t('terms-article-2')}</h3>
        <p>{t('terms-article-2-p1')}</p>
        <p>{t('terms-article-2-p2')}</p>
      </section>
      <TermsFragment heading='terms-article-2.1' text='terms-article-2.1-p1' />
      <section>
        <h3>{t('terms-article-3')}</h3>
        <p>{t('terms-article-3-p1')}</p>
        <ul>
          <li>{t('terms-article-3-l1')}</li>
          <li>{t('terms-article-3-l2')}</li>
          <li>{t('terms-article-3-l3')}</li>
        </ul>
      </section>
      <section>
        <h3>{t('terms-article-4')}</h3>
        <p>{t('terms-article-4-p1')}</p>
        <ul>
          <li>{t('terms-article-4-l1')}</li>
          <li>{t('terms-article-4-l2')}</li>
          <li>{t('terms-article-4-l3')}</li>
          <li>{t('terms-article-4-l4')}</li>
        </ul>
        <p>{t('terms-article-4-p2')}</p>
      </section>
      <section>
        <h3>{t('terms-article-5')}</h3>
        <p>
          {t('terms-article-5-p1')}{' '}
          <a href='https://www.terre54.co'>contact@terre54.co</a>
        </p>
        <p>
          {t('terms-article-5-p2')}{' '}
          <a href='https://www.terre54.co'>contact@terre54.co</a>
        </p>
        <p>{t('terms-article-5-p3')}</p>
        <p>{t('terms-article-5-p4')}</p>
        <ul>
          <li>{t('terms-article-5-l1')}</li>
          <li>{t('terms-article-5-l2')}</li>
          <li>{t('terms-article-5-l3')}</li>
        </ul>
      </section>
      <TermsFragment heading='terms-article-6' text='terms-article-6-p1' />
      <section>
        <h3>{t('terms-article-7')}</h3>
        <h3>{t('terms-article-7.1')}</h3>
        <p>{t('terms-article-7.1-p1')}</p>
        <ul>
          <li>{t('terms-article-7.1-l1')}</li>
          <li>{t('terms-article-7.1-l2')}</li>
          <li>{t('terms-article-7.1-l3')}</li>
        </ul>
      </section>
      <section>
        <h3>{t('terms-article-7.2')}</h3>
        <p>{t('terms-article-7.2-p1')}</p>
        <ul>
          <li>{t('terms-article-7.2-l1')}</li>
          <li>{t('terms-article-7.2-l2')}</li>
          <li>{t('terms-article-7.2-l3')}</li>
          <li>{t('terms-article-7.2-l4')}</li>
          <li>{t('terms-article-7.2-l5')}</li>
        </ul>
      </section>
      <section>
        <h3>{t('terms-article-8')}</h3>
        <h3>{t('terms-article-8.1')}</h3>
        <p>{t('terms-article-8.1-p1')}</p>
        <h3>{t('terms-article-8.2')}</h3>
        <p>{t('terms-article-8.2-p1')}</p>
      </section>
      <section>
        <h3>{t('terms-article-9')}</h3>
        <h3>{t('terms-article-9.1')}</h3>
        <p>{t('terms-article-9.1-p1')}</p>
        <h3>{t('terms-article-9.2')}</h3>
        <p>{t('terms-article-9.2-p1')}</p>
      </section>
      <TermsFragment heading='terms-article-10' text='terms-article-10-p1' />
      <TermsFragment heading='terms-article-11' text='terms-article-11-p1' />
      <TermsFragment heading='terms-article-12' text='terms-article-12-p1' />
      <TermsFragment heading='terms-article-13' text='terms-article-13-p1' />
      <TermsFragment heading='terms-article-14' text='terms-article-14-p1' />
      <TermsFragment heading='terms-article-15' text='terms-article-15-p1' />
      <TermsFragment heading='terms-article-16' text='terms-article-16-p1' />
      <TermsFragment heading='terms-article-17' text='terms-article-17-p1' />
      <TermsFragment heading='terms-article-18' text='terms-article-18-p1' />
      <TermsFragment heading='terms-article-19' text='terms-article-19-p1' />
      <TermsFragment heading='terms-article-20' text='terms-article-20-p1' />
      <TermsFragment heading='terms-article-21' text='terms-article-21-p1'>
        <a href='http://www.terre54.co/'>
          Terre54: Securing quality agro-products for businesses
        </a>
        <span> {t('terms-article-21-p2')}</span>
      </TermsFragment>
      <TermsFragment heading='terms-article-22' text='terms-article-22-p1' />
      <TermsFragment heading='terms-article-23' text='terms-article-23-p1' />
    </div>
  );
};

export default TermsOfServicePage;
