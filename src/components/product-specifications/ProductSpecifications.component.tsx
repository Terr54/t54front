import Button from '../commons/controls/button/Button.component';
import Input from '../commons/input/Input.component';
import TextArea from '../commons/input/TextArea';
import ModalWrapper from '../modal-wrapper/ModalWrapper.component';
import { Product, ProductStock } from '../../domain/domain';
import { useTranslation } from 'react-i18next';
import DropdownSelect from '../commons/Select/DropdownSelect.component';
import {
  productSpecificationFields,
  requestQuoteFields,
} from '../../constants';
import { useState } from 'react';
import classes from './ProductSpecifications.module.css';

interface RequestSampleProps {
  showModal?: boolean;
  onClose?: () => void;
  product?: Product;
  stock?: ProductStock;
}

const ProductSpecifications = ({
  showModal,
  onClose,
  product,
  stock,
}: RequestSampleProps) => {
  const { t } = useTranslation();
  const [usedPlans, setUsedPlans] = useState(
    productSpecificationFields.usedPlans[0]
  );
  const [customerType, setCustomerType] = useState<string>(
    requestQuoteFields.customerType[0]
  );
  const [customLabel, setCustomLabel] = useState<string>(
    requestQuoteFields.customLabels[0]
  );
  const [samplesRequired, setSamplesRequired] = useState<string>(
    requestQuoteFields.samplesRequired[0]
  );
  const [specifications, setSpecifications] = useState<string>(
    requestQuoteFields.specifications[0]
  );
  const [processing, setProcessing] = useState<string>(
    requestQuoteFields.processing[0]
  );
  const [productCapacity, setProductCapacity] = useState<string>(
    productSpecificationFields.productCapacity[0]
  );
  const [currency, setCurrency] = useState<string>(
    productSpecificationFields.currency[0]
  );
  const [harvestPeriod, setHarvestPeriod] = useState<string>(
    productSpecificationFields.harvestPeriod[0]
  );
  const [inspection, setInspection] = useState<string>(
    requestQuoteFields.inspection[0]
  );
  const [contactMethod, setContactMethod] = useState<string>(
    requestQuoteFields.contactMethod[0]
  );
  const [quantity, setQuantity] = useState('10');
  const [otherInfo, setOtherInfo] = useState('');
  return (
    <ModalWrapper
      heading={`Product Registration For Seller`}
      showModal={showModal}
      onClose={onClose}
      height='90vh'
      width='60vw'
      padding='20px'
    >
      <p style={{ fontSize: '13px' }}>
        We would like to collect the product specification from you. please
        contact us at Contact us at{' '}
        <span style={{ fontWeight: 'bold' }}>
          +2348059201672 / +33760926545 or contact@terre54.co
        </span>{' '}
        if you have any further questions.
      </p>
      <div style={{ overflowY: 'scroll', height: '62vh', marginBottom: '16px' }}>
        <section>
          <p>Section 1</p>
          <Input placeholder='Product Name' label='Product name:' />
          <Input placeholder='Botanic Name' label='Botanic name:' />
          <Input placeholder='Weight' label='Weight (KG)' />
          <TextArea
            value={otherInfo}
            onChange={(e) => setOtherInfo(e?.target?.value)}
            label={t('Product Description')}
            placeholder={t('description')}
            width='100%'
          />
          <div className={classes.label}>{t('Used plant parts')}</div>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={usedPlans}
            values={productSpecificationFields.usedPlans.map((p: any) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) => setUsedPlans(option?.option ?? '')}
          />
          <Input placeholder='ingredients' label='Ingredients' />
          <Input placeholder='HS Code' label='HS Code:' />
          <div className={classes.label}>{t('Processing')}</div>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={processing}
            values={requestQuoteFields.processing.map((p: any) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) =>
              setProcessing(option?.option ?? '')
            }
          />
          <div className={classes.label}>{t('Specifications')}</div>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={specifications}
            values={requestQuoteFields.specifications.map((p: any) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) =>
              setSpecifications(option?.option ?? '')
            }
          />
          <div className={classes.label}>{t('Annual Product Capacity')}</div>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={productCapacity}
            values={productSpecificationFields.productCapacity.map(
              (p: any) => ({
                option: p,
              })
            )}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) =>
              setProductCapacity(option?.option ?? '')
            }
          />
          <Input
            placeholder='Country of Agricultural Origin'
            label='  Country of Agricultural Origin  '
          />
          <Input
            placeholder='Country of Origin (Processing)'
            label='Country of Origin (Processing)'
          />
          <Input placeholder='Price/ kg' label='Price/ kg' />
          <div className={classes.label}>{t('Currency')}</div>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={currency}
            values={productSpecificationFields.currency.map((p: any) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) => setCurrency(option?.option ?? '')}
          />
          <div className={classes.label}>{t('Main Harvest period:')}</div>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={harvestPeriod}
            values={productSpecificationFields.harvestPeriod.map((p: any) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) =>
              setHarvestPeriod(option?.option ?? '')
            }
          />
          <div className={classes.label}>{t('Secondary Harvest period:')}</div>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={harvestPeriod}
            values={productSpecificationFields.harvestPeriod.map((p: any) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) =>
              setHarvestPeriod(option?.option ?? '')
            }
          />
        </section>
        <section>
          <p>Section 2</p>
          <Input placeholder='Name Of Company' label='Name Of Company:' />
          <Input placeholder='First Name' label='Your First Name' />
          <Input placeholder='Lirst Name' label='Your Last Name' />
          <Input placeholder='Contact Address' label='Contact Address' />
          <Input placeholder='Email:' label='Email' />
          <Input placeholder='Tel:' label='Phone number' />
          <div className={classes.label}>{t('Preferred Contact Address:')}</div>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={contactMethod}
            values={requestQuoteFields.contactMethod?.map((p) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option) => setContactMethod(option?.option ?? '')}
          />
        </section>
      </div>
      <Button text={t('Add Specifications')} bgColor='#E63F07' width='100%' />
    </ModalWrapper>
  );
};

export default ProductSpecifications;
