import Button from '../commons/controls/button/Button.component'
import Input from '../commons/input/Input.component'
import TextArea from '../commons/input/TextArea'
import ModalWrapper from '../modal-wrapper/ModalWrapper.component'
import { Product, ProductStock } from '../../domain/domain'
import { useTranslation } from 'react-i18next'
import DropdownSelect from '../commons/Select/DropdownSelect.component'

interface RequestSampleProps {
  showModal?: boolean,
  onClose?: () => void,
  product: Product,
  stock: ProductStock,
}

const RequestQuote = ({ showModal, onClose, product, stock }: RequestSampleProps) => {
  const { t } = useTranslation();
  return (
    <ModalWrapper heading={`${t('request-quote')} (${product?.name ?? ''})`} showModal={showModal} onClose={onClose} height='86%' width='60vw'>
          <div style={{ display: 'flex', width: '100%', alignItems: 'flex-end'}}>
            <div style={{ width: '60%' }}>
              <Input type='number' label={t('quantity')} />
            </div>
            <span style={{ padding: 15, fontSize: 16 }}>{stock?.unitMeasure}</span>
          </div>
        <DropdownSelect placeholder={t('select-preferred-option')}  />
        <Input label={t('payment-term')} placeholder={t('select-preferred-option')} />
        <TextArea label={t('other-info')} placeholder={t('specify-needs-packaging')} width='100%' />
        <Button text={t('request-quote')} bgColor='#E63F07' width='100%' />
    </ModalWrapper>
  )
}

export default RequestQuote
