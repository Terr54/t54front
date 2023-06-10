import { useTranslation } from 'react-i18next';

export const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div style={{ margin: 25 }}>
      <h1>{t('policy-title')}</h1>
      <h3>{t('of-site')}:</h3>
      <h3>{t('terre-name')}</h3>
      <br />
      <section>
        <h3>{t('policy-article-1')}</h3>
        <p style={{ fontWeight: 'bold' }}>{t('policy-article-1-p1')}</p>
        <p>{t('policy-article-1-p2')}</p>
        <ul>
          <li>{t('policy-article-1-l1')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-1-l2')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-1-l3')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-1-l4')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-1-l5')}</li>
        </ul>
        <p>{t('policy-article-1-p3')}</p>
        <p>
          <a href='https://www.terre54.co' target='__blank'>
            Terre54.co/
          </a>
        </p>
      </section>
      <section>
        <h3>{t('policy-article-2')}</h3>
        <p>{t('policy-article-2-p1')}</p>
        <ul>
          <li>{t('policy-article-2-l1')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l2')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l3')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l4')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l5')}</li>
        </ul>
        <p>{t('policy-article-2-p2')}</p>
        <ul>
          <li>{t('policy-article-2-l6')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l7')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l8')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l9')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l10')}</li>
        </ul>
        <ul>
          <li>{t('policy-article-2-l11')}</li>
        </ul>
      </section>
      <section>
        <h3>{t('policy-article-3')}</h3>
        <p>
          <strong>A. </strong>
          {t('policy-article-3-h1')}
        </p>
        <p>{t('policy-article-3-h1-p1')}</p>
        <p>{t('policy-article-3-h1-p2')}</p>
        <p>{t('policy-article-3-h1-p3')}</p>
        <p>{t('policy-article-3-h1-p4')}</p>
        <p>{t('policy-article-3-h1-p5')}</p>
        <p>{t('policy-article-3-h1-p6')}</p>
        <p>{t('policy-article-3-h1-p7')}</p>
        <p>
          <strong>B. </strong>
          {t('policy-article-3-h2')}
        </p>
        <p>{t('policy-article-3-h2-p1')}</p>
        <p>{t('policy-article-3-h2-p2')}</p>
        <p>
          <strong>C. </strong>
          {t('policy-article-3-h3')}
        </p>
        <p>{t('policy-article-3-h3-p1')}</p>
        <p>{t('policy-article-3-h3-p2')}</p>
      </section>
      <section>
        <h3>{t('policy-article-4')}</h3>
        <p>
          <strong>A. </strong>
          {t('policy-article-4-h1')}
        </p>
        <p>{t('policy-article-4-h1-p1')}</p>
        <p>{t('policy-article-4-h1-p2')}</p>
        <p>
          <a href='mailto: contact@terre54.co'>dpo@terre54.co</a>
        </p>
        <p>
          <strong>B. </strong>
          {t('policy-article-4-h2')}
        </p>
        <p>{t('policy-article-4-h2-p1')}</p>
        <p>{t('policy-article-4-h2-p2')}</p>
        <p>{t('policy-article-4-h2-p3')}</p>
        <p>{t('policy-article-4-h2-p4')}</p>
        <p>{t('policy-article-4-h2-p5')}</p>
        <p>
          <strong>C. </strong>
          {t('policy-article-4-h3')}
        </p>
        <p>{t('policy-article-4-h2-p1')}</p>
        <p>{t('policy-article-4-h2-p2')}</p>
        <p>{t('policy-article-4-h2-p3')}</p>
        <p>
          <a href='mailto: contact@terre54.co'>dpo@terre54.co</a>
        </p>
      </section>
      <section>
        <h3>{t('policy-article-5')}</h3>
        <ul>
          <li>{t('policy-article-5-l1')}</li>
        </ul>
        <p>{t('policy-article-5-p1')}</p>
        <p>{t('policy-article-5-p2')}</p>
        <p>
          <strong>A. </strong>
          {t('policy-article-5-h1')}
        </p>
        <p>
          <i>
            <strong>a. </strong>
            {t('policy-article-5-h1-s1')}
          </i>
        </p>
        <p>{t('policy-article-5-h1-s1-p1')}</p>
        <p>
          {t('policy-article-5-h1-s1-p2')}{' '}
          <a href='mailto: contact@terre54.co'>dpo@terre54.co</a>
        </p>
        <p>{t('policy-article-5-h1-s1-p3')}</p>
        <p>
          {t('policy-article-5-h1-s1-p4')}{' '}
          <a href='mailto: contact@terre54.co'>dpo@terre54.co</a>
        </p>
        <p>
          <i>
            <strong>b. </strong>
            {t('policy-article-5-h1-s2')}
          </i>
        </p>
        <p>{t('policy-article-5-h1-s2-p1')}</p>
        <p>
          {t('policy-article-5-h1-s2-p2')}{' '}
          <a href='mailto: contact@terre54.co'>dpo@terre54.co</a>
        </p>
        <p>
          <i>
            <strong>c. </strong>
            {t('policy-article-5-h1-s3')}
          </i>
        </p>
        <p>{t('policy-article-5-h1-s3-p1')}</p>
        <p>{t('policy-article-5-h1-s3-p2')}</p>
        <p>
          {t('policy-article-5-h1-s3-p3')}{' '}
          <a href='mailto: contact@terre54.co'>dpo@terre54.co</a>
        </p>
        <p>
          <i>
            <strong>d. </strong>
            {t('policy-article-5-h1-s4')}
          </i>
        </p>
        <p>{t('policy-article-5-h1-s4-p1')}</p>
        <p>
          <i>
            <strong>e. </strong>
            {t('policy-article-5-h1-s5')}
          </i>
        </p>
        <p>{t('policy-article-5-h1-s5-p1')}</p>
        <p>
          <i>
            <strong>f. </strong>
            {t('policy-article-5-h1-s6')}
          </i>
        </p>
        <p>
          {t('policy-article-5-h1-s6-p1')}{' '}
          <a
            href='https://www.cnil.fr/'
            target='__blank'
            style={{ fontWeight: 'bold', color: 'blue' }}
          >
            CNIL
          </a>{' '}
          {t('policy-article-5-h1-s6-p1-c')}
        </p>
        <p>
          <strong>B. </strong>
          {t('policy-article-5-h2')}
        </p>
        <p>{t('policy-article-5-h2-p1')}</p>
        <p>{t('policy-article-5-h2-p2')}</p>
        <p>{t('policy-article-5-h2-p3')}</p>
      </section>
      <section>
        <h3>{t('policy-article-6')}</h3>
        <ul>
          <li>{t('policy-article-6-l1')}</li>
        </ul>
        <p>{t('policy-article-6-p1')}</p>
        <p>{t('policy-article-6-p2')}</p>
        <p>{t('policy-article-6-p3')}</p>
        <p>{t('policy-article-6-p4')}</p>
        <p>
          <i>
            <strong>a. </strong>
            {t('policy-article-6-s1')}
          </i>
        </p>
        <p>{t('policy-article-6-s1-p1')}</p>
        <p>{t('policy-article-6-s1-p2')}</p>
        <p>{t('policy-article-6-s1-p3')}</p>
        <p>{t('policy-article-6-s1-p4')}</p>
        <ul>
          <li><strong>Chrome : </strong><a
            href='https://support.google.com/accounts/answer/61416?hl=fr'
            target='__blank'
            style={{ color: 'blue' }}
          >
            {t('policy-article-6-chrome')}
          </a></li>
        </ul>
        <ul>
          <li><strong>Firefox : </strong><a
            href='https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur?redirectslug=autoriser-bloquer-cookies-preferences-sites&redirectlocale=fr'
            target='__blank'
            style={{ color: 'blue' }}
          >
            {t('policy-article-6-firefox')}
          </a></li>
        </ul>
        <ul>
          <li><strong>Safari : </strong><a
            href='https://www.apple.com/legal/privacy/fr-ww/'
            target='__blank'
            style={{ color: 'blue' }}
          >
            {t('policy-article-6-safari')}
          </a></li>
        </ul>
        <ul>
          <li><strong>Explorer : </strong><a
            href='https://support.microsoft.com/fr-fr/windows/supprimer-et-g%C3%A9rer-les-cookies-168dab11-0753-043d-7c16-ede5947fc64d'
            target='__blank'
            style={{ color: 'blue' }}
          >
            {t('policy-article-6-explorer')}
          </a></li>
        </ul>
        <ul>
          <li><strong>Opera : </strong><a
            href='http://www.opera.com/help/tutorials/security/cookies/'
            target='__blank'
            style={{ color: 'blue' }}
          >
            {t('policy-article-6-opera')}
          </a></li>
        </ul>
        <ul>
          <li>{t('policy-article-6-l2')}</li>
        </ul>
        <p>
          <i>
            <strong>b. </strong>
            {t('policy-article-6-s2')}
          </i>
        </p>
      </section>
      <p>{t('policy-article-6-s2-p1')}</p>
      <p>{t('policy-article-6-s2-p2')}</p>
      <p>{t('policy-article-6-s2-p3')}</p>
      <p>{t('policy-article-6-s2-p4')}</p>
      <p>{t('policy-article-6-s2-p5')}</p>
      <p>{t('policy-article-6-s2-p6')}</p>
      <p>{t('policy-article-6-s2-p7')}</p>
      <section>
      <h3>{t('policy-article-7')}</h3>
      <p>{t('policy-article-7-p1')}</p>
      <p><a href='https://www.terre54.co' target='__blank'>Terre54.co</a> {t('policy-article-7-p2')}</p>
      <p>{t('policy-article-7-p3')}</p>
      <p>{t('policy-article-7-p4')}</p>
      <p>{t('policy-article-7-p5')}</p>
      <p>{t('policy-article-7-p6')}</p>
      <p>{t('policy-article-7-p7')}</p>
      </section>
      <section>
      <h3>{t('policy-article-8')}</h3>
      <p>{t('policy-article-8-p1')}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
