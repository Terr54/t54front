import Button from '../commons/controls/button/Button.component'
import Input from '../commons/input/Input.component'
import TextArea from '../commons/input/TextArea'
import ModalWrapper from '../modal-wrapper/ModalWrapper.component'
import { Product, ProductStock } from '../../domain/domain'
import { useTranslation } from 'react-i18next'
import DropdownSelect from '../commons/Select/DropdownSelect.component'
import { Label } from '../commons/input/Input.styles'
import { paymentTerms } from '../../constants'
import { useState } from 'react'

interface RequestSampleProps {
  showModal?: boolean,
  onClose?: () => void,
  product: Product,
  stock: ProductStock,
}


const RequestQuote = ({ showModal, onClose, product, stock }: RequestSampleProps) => {
  const { t } = useTranslation();
  const [paymentTerm, setPaymentTerm] = useState(paymentTerms[0]);
  const [quantity, setQuantity] = useState('10');
  const [otherInfo, setOtherInfo] = useState('');
  return (
    <ModalWrapper heading={`${t('request-quote')} (${product?.name ?? ''})`} showModal={showModal} onClose={onClose} height='86%' width='60vw'>
          <div style={{ display: 'flex', width: '100%', alignItems: 'flex-end'}}>
            <div style={{ width: '40%' }}>
              <Input
                value={quantity} onChange={e => setQuantity(e?.target?.value)}
                type='number'
                label={t('quantity')}
              />
            </div>
            <span style={{ padding: 15, fontSize: 16 }}>{stock?.unitMeasure}</span>
          </div>
        <Label>{t('payment-term')}</Label>
        <DropdownSelect
          dropdownListStyle={{ background: '#eee' }}
          value={paymentTerm}
          values={paymentTerms?.map(p => ({ option: p }))}
          placeholder={t('select-preferred-option')}
          onOptionSelect={(option) => setPaymentTerm(option?.option ?? '')}
        />
        <TextArea
          value={otherInfo}
          onChange={e => setOtherInfo(e?.target?.value)}
          label={t('other-info')}
          placeholder={t('specify-needs-packaging')}
          width='100%'
        />
        <Button text={t('request-quote')} bgColor='#E63F07' width='100%' />
    </ModalWrapper>
  )
}

export default RequestQuote
