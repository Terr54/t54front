import Button from '../commons/controls/button/Button.component';
import Input from '../commons/input/Input.component';
import TextArea from '../commons/input/TextArea';
import ModalWrapper from '../modal-wrapper/ModalWrapper.component';
import { Product, ProductStock } from '../../domain/domain';
import { useTranslation } from 'react-i18next';
import DropdownSelect from '../commons/Select/DropdownSelect.component';
import { requestQuoteFields } from '../../constants';
import { useState } from 'react';
import { Label } from './RequestQuote.styles';

interface RequestSampleProps {
  showModal?: boolean;
  onClose?: () => void;
  product: Product;
  stock: ProductStock;
}

const RequestQuote = ({
  showModal,
  onClose,
  product,
  stock,
}: RequestSampleProps) => {
  const { t } = useTranslation();
  const [paymentTerm, setPaymentTerm] = useState(
    requestQuoteFields.paymentTerms[0]
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
  const [packaging, setPackaging] = useState<string>(
    requestQuoteFields.packaging[0]
  );
  const [transportation, setTransportation] = useState<string>(
    requestQuoteFields.transportation[0]?.option
  );
  const [incoterms, setIncoterms] = useState<string>(
    requestQuoteFields.incoterms[0]
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
      heading={`${t('request-quote')} (${product?.name ?? ''})`}
      showModal={showModal}
      onClose={onClose}
      height='90vh'
      width='60vw'
    >
      <p style={{ fontSize: '13px' }}>
        After you fill out this order request, we will contact you to go over
        details and availability before the order is completed. If you would
        like faster service and direct information on current stock and pricing
        please contact us at Contact us at{' '}
        <span style={{ fontWeight: 'bold' }}>
          +2348059201672 / +33760926545 or contact@terre54.co
        </span>
      </p>
      <div style={{ overflowY: 'scroll', height: '62vh' }}>
        <span>Section 1</span>
        <section>
          <div
            style={{ display: 'flex', width: '100%', alignItems: 'flex-end' }}
          >
            <div style={{ width: '40%' }}>
              <Input
                value={quantity}
                onChange={(e) => setQuantity(e?.target?.value)}
                type='number'
                label={t('quantity')}
              />
            </div>
            <span style={{ padding: 15, fontSize: 16 }}>
              {stock?.unitMeasure}
            </span>
          </div>
          <Label>{t('Are you a new or existing customer?')}</Label>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={customerType}
            values={requestQuoteFields.customerType.map((p: any) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) =>
              setCustomerType(option?.option ?? '')
            }
          />
          <Input placeholder='First Name' label='Your First Name' />
          <Input placeholder='Lirst Name' label='Your Last Name' />
          <Input
            placeholder='What is the item you would like to order?'
            label='What is the item you would like to order?'
            subLabel='Please enter the product name and details of your inquiry'
          />
          <Label>
            {t('Would you require personalization/ custom labels?')}
          </Label>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={customLabel}
            values={requestQuoteFields.customLabels.map((p: any) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option: any) =>
              setCustomLabel(option?.option ?? '')
            }
          />
          <Input placeholder='Description' label='Contact Information:' />
          <Label>{t('Specifications')}</Label>
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
          <Label>{t('Processing')}</Label>
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
          <Label>{t('Payment-Terms')}</Label>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={paymentTerm}
            values={requestQuoteFields.paymentTerms?.map((p) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option) => setPaymentTerm(option?.option ?? '')}
          />
        </section>
        <section>
          <span>Section 2</span>
          <p>Package</p>
          <p>
            Food safe based on 1935/2004/EC, 2023/2006/EC, 10/2011/EC regulation
          </p>
          <Label>{t('How would you like your packages?')}</Label>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={packaging}
            values={requestQuoteFields.packaging?.map((p) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option) => setPackaging(option?.option ?? '')}
          />
        </section>
        <section>
          <span>Section 3</span>
          <Input placeholder='Description' label='Freight' />
          <Label>{t('Desired mode of transportation')}</Label>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={transportation}
            values={requestQuoteFields.transportation?.map((p) => ({
              option: p.option,
              image: p?.image,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option) => setTransportation(option?.option ?? '')}
          />
          <Label>{t('Incoterms')}</Label>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={incoterms}
            values={requestQuoteFields.incoterms?.map((p) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option) => setIncoterms(option?.option ?? '')}
          />
          <Input placeholder='country' label='Incoterms Country' />
          <Label>{t('Samples required:')}</Label>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={samplesRequired}
            values={requestQuoteFields.samplesRequired?.map((p) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option) => setSamplesRequired(option?.option ?? '')}
          />
          <Label>{t('Inspection:')}</Label>
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={inspection}
            values={requestQuoteFields.inspection?.map((p) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option) => setInspection(option?.option ?? '')}
          />
          <Input placeholder='Tel:' label='Phone number' />
          <Input placeholder='Email:' label='Email' />
          <DropdownSelect
            dropdownListStyle={{ background: '#eee' }}
            value={contactMethod}
            values={requestQuoteFields.contactMethod?.map((p) => ({
              option: p,
            }))}
            placeholder={t('select-preferred-option')}
            onOptionSelect={(option) => setContactMethod(option?.option ?? '')}
          />
        <TextArea
          value={otherInfo}
          onChange={(e) => setOtherInfo(e?.target?.value)}
          label={t('Questions and Comments')}
          placeholder={t('questions and comments')}
          width='100%'
        />
        </section>
      </div>
      <Button text={t('request-quote')} bgColor='#E63F07' width='100%' />
    </ModalWrapper>
  );
};

export default RequestQuote;
