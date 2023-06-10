import { useEffect, useRef, useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { listStockPendingVerification, verifyProductInventory } from '../../../api/product';
import classes from './PendingProducts.module.css';
import { PagedStockVerificationResponse } from '../../../domain/domain';
import Wrapper from '../../../components/admin/wrapper/Wrapper.component';
import Button from '../../../components/commons/controls/button/Button.component';
import countries, { CountryCode } from '../../../utils/contrycodes';
import profile from '../../../assets/pictures/profile-placeholder.png'
import { useTranslation } from 'react-i18next';

const PendingProducts = () => {
  const [pendingVerification, setPendingVerification] = useState<PagedStockVerificationResponse | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [prodId, setProdId] = useState<string>('');
  const { t, i18n } = useTranslation();
  const effectRef = useRef(true);

  useEffect(() => {
    if (effectRef.current) {
      listStockPendingVerification().then(res => {
        setPendingVerification(res?.data?.content);
      });
    }
    effectRef.current = false;
  }, []);

  const handleMouseOver = (id: string) => {
    setProdId(id);
    if (prodId === id) { setIsHovering(true) } else setIsHovering(false);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleAcceptStock = (id: number) => {
    verifyProductInventory(id).then(() => {
      listStockPendingVerification().then(res => {
        setPendingVerification(res?.data?.content);
      });
    });
  }

  return (
    <Wrapper heading={t('pending-product-verification')}>
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead className={classes.tHead}>
            <tr>
                <th>{t('supplier-profile')}</th>
                <th>{t('supplier-email')}</th>
                <th>{t('supplier-contact')}</th>
                <th>{t('merchant-name')}</th>
                <th>{t('product-name')}</th>
                <th>{t('product-origin')}</th>
                <th>{t('quantity')}</th>
                <th>{t('unit-price')}</th>
                <th>{t('unit-measure')}</th>
                <th>{t('published-at')}</th>
                <th />
                <th />
            </tr>
          </thead>
          <tbody className={classes.tableBody}>
            {
              pendingVerification?.productStockResultSet?.map((prodStock) => {
                const country = countries[prodStock?.product?.originCountryId as CountryCode];
                return (
                  <>
                  <tr>
                    <td className={classes.action}>
                    <div className={classes.actionContent}>
                      <CheckBoxOutlineBlankIcon className={classes.actionIcon} />
                      <img
                        src={pendingVerification?.productSuppliers[prodStock?.product?.sellerProfileId]?.picture ?? profile}
                        style={{ borderRadius: '50%' }}
                        width='30px'
                        height='30px'
                      />
                    </div>
                    </td>
                  <td>
                  {pendingVerification?.supplierEmails?.[prodStock?.product?.userId]}
                  </td>
                  <td>
                  {pendingVerification?.productSuppliers[prodStock?.product?.sellerProfileId]?.phone}
                  </td>
                  <td>{pendingVerification?.productSuppliers[prodStock?.product?.sellerProfileId]?.merchantName}</td>
                  <td
                    onMouseOver={() => handleMouseOver(prodStock.product?.id)}
                    onMouseOut={handleMouseOut}>
                      {prodStock.product?.name}</td>
                  <td>
                  <span style={{ textTransform: 'capitalize', whiteSpace: 'nowrap' }}>{country?.name?.[i18n.language as ('en' | 'fr')]} {country?.flag?.flag}</span>
                  </td>
                  <td>{prodStock?.productStock?.quantity}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{prodStock?.productStock?.unitPrice} ({prodStock?.productStock?.currency})</td>
                  <td>{prodStock?.productStock?.unitMeasure}</td>
                  <td>{prodStock?.productStock?.publishedAt != null ? new Date(prodStock?.productStock?.publishedAt)?.toDateString() : '-' }</td>
                  <td>
                    <Button
                      text={t('accept')}
                      border="1px solid #E63F07"
                      bgColor="#fff"
                      color="#E63F07"
                      onClick={() => handleAcceptStock(prodStock?.productStock?.id)}
                    />
                  </td>
                  <td>
                    <Button
                      text={t('decline')}
                      bgColor="#E63F07"
                    />
                  </td>
                </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default PendingProducts;
