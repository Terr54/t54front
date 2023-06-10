import React, { useState } from 'react';
import Button from '../commons/controls/button/Button.component';
import Input from '../commons/input/Input.component';
import ModalWrapper from '../modal-wrapper/ModalWrapper.component';
import RequestSuccess from '../request-success/RequestSuccess.component';
import { GooglePlaceInput } from '../google-places/GooglePlaceInput.component';
import { useTranslation } from 'react-i18next';
import { useSelector } from '../../store';
import { Place } from '../../domain/domain';
import { requestASample } from '../../api/common';

interface requestSampleProps {
  showModal?: boolean;
  onClose?: () => void;
  productId: string;
}

const RequestSample = ({ showModal, onClose, productId }: requestSampleProps) => {
  const userInfo = useSelector(state => state.user);
  const [success, setSuccess] = useState(false);
  const [returnEmail, setReturnEmail] = useState(userInfo?.payload?.user?.email ?? '');
  const [address, setAddress] = useState<Partial<Place>>();
  const { t } = useTranslation();

  const handleRequestASample = () => {
    requestASample({
      returnEmail,
      productId,
      address
    }).then(() => {
      setSuccess(true);
    })
  }

  return (
    <>
      {success
        ? (
        <RequestSuccess success={success} onClick={() => setSuccess(false)} />
          )
        : (
        <ModalWrapper
          heading='Request Sample'
          showModal={showModal}
          onClose={onClose}
          height="auto"
        >
          <GooglePlaceInput
            label={t('delivery-address')}
            placeholder={t('delivery-address')}
            onSelect={(place) => setAddress(place) }
          />
          <Input
              label={t('return-email')}
              margin='0'
              placeholder="email@terre54.com"
              value={returnEmail}
              onChange={(e) => setReturnEmail(e?.target?.value)}
            />
          <Button
            margin='0'
            width='100%'
            text={t('request-sample')}
            bgColor='#E63F07'
            onClick={handleRequestASample}
            disabled={!address}
          />
        </ModalWrapper>
          )}
    </>
  );
};

export default RequestSample;
