import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import Button from '../../../components/commons/controls/button/Button.component';
import Modal from '../../../components/commons/modal/Modal.component';
import {
  Container,
  Form,
  Heading,
  HeadingClose,
  StyledClose,
  ActionButtons,
  StyledLink
} from './Suppliers.styles';
import Input from '../../../components/commons/input/Input.component';
import TextArea from '../../../components/commons/input/TextArea';
import { useTranslation } from 'react-i18next';
import { KeyCodes } from '../../../utils';
import Crumb from '../../../components/commons/controls/crumb/Crumb.component';
import { inviteSuppliers } from '../apis/admin.apis';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from '../../../store';
import {
  addSupplierInvitations,
  loadSupplierInvitationsAction,
  loadSuppliersAction,
  setSupplierInvitations
} from '../../../store/features/slices/supplier';
import classes from '../admin.module.css';
import { suppliersHeading } from '../../../assets/data/suppliersHeading';
import flag from '../../../assets/pictures/IvoryFlag.svg';
import { adminTabs } from '../../../assets/data/adminTabs';
import { viewTypes } from '../../../assets/data/viewType';
import HeadingTab from '../../../components/admin/admin-tabs/HeadingTab.component';
import ViewTypeTab from '../../../components/admin/admin-tabs/ViewTypTab.component';
import SupplierCard from '../../../components/admin/supplier-card/SupplierCard.component';
import Wrapper from '../../../components/admin/wrapper/Wrapper.component';
import RecentlyAdded from '../../../components/admin/recently-added/RecentlyAdded.component';

const Suppliers = () => {
  const suppliersState = useSelector((state) => state.supplier.payload);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [supliers, setSuppliers] = useState<string[]>([]);
  const [mailAdition, setMailAddition] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState<string>('Pending');
  const [verified, setVerified] = useState<boolean>(false);
  const [type, setType] = useState<string>('');
  const [page, setPage] = useState(0);
  const effectRef = useRef(false);
  const inviteEffectRef = useRef(false);

  useEffect(() => {
    if (!inviteEffectRef?.current) {
      dispatch(loadSupplierInvitationsAction());
      inviteEffectRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (!effectRef?.current) {
      dispatch(loadSuppliersAction({ pageNumber: page, pageSize: 100 }));
      effectRef.current = true;
    } else {
      effectRef.current = false;
    }
  }, []);

  const handleDeleteMail = (id: string) => {
    setSuppliers((prev) => prev.filter((sup) => sup !== id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      [KeyCodes.comma, KeyCodes.simicolon, KeyCodes.enter].includes(
        e?.keyCode
      ) &&
      isValidEmail
    ) {
      setSuppliers((prev) => {
        if (prev?.some((s) => s === mailAdition)) return prev;
        return [...prev, mailAdition];
      });
      setMailAddition('');
    }
  };
  const handleChange = (e: ChangeEvent<Partial<HTMLInputElement>>) => {
    const val = e?.target?.value;
    setIsValidEmail(e?.target?.validity?.valid ?? null);
    if (![',', ';'].some((s) => val?.endsWith(s)) || e?.target?.validity?.valid) {
      setMailAddition(val ?? '');
    }
  };
  const handleInvite = () => {
    inviteSuppliers({ emailList: supliers?.length > 0 ? [...supliers, ...(mailAdition ? [mailAdition] : [])] : [mailAdition], message })
      .then((res) => {
        dispatch(addSupplierInvitations(res.data.content));
        setSuppliers([]);
        setMailAddition('');
        setMessage('');
        toast.success(t('supplier-invitation-sent'));
      })
      .catch((e) => {
        toast.error(t('supplier-invitation-fialed'));
      });
  };

  console.count(activeTab);

  return (
    <Wrapper
      heading="Suppliers"
      renderButton={() => (
        <Button
          bgColor="#E63F07"
          text={t('invite-supplier')}
          renderIcon={() => <AddIcon />}
          iconAfter
          onClick={() => setShowModal(true)}
          width="16%"
          padding="8px"
        />
      )}
    >
      <Container>
        <div className={classes.adminTabs}>
          <div style={{ display: 'flex' }}>
            {[
              { id: 1, text: 'Pending', amount: suppliersState?.pending.length ?? 0 },
              { id: 2, text: 'Accepted', amount: suppliersState?.accepted?.content?.length ?? 0 }
            ].map((tab) => (
              <HeadingTab
                active={tab.text === activeTab}
                amount={tab.amount ?? ''}
                text={tab.text}
                onClick={() => setActiveTab(tab.text)}
                key={tab.text}
              />
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <div className={classes.types}>
              {viewTypes.map((tab) => (
                <ViewTypeTab
                  active={tab.type === type}
                  onClick={() => setType(tab.type)}
                  key={tab.type}
                  renderIcon={() => (
                    <tab.icon fontSize="small" style={{ margin: '0px 4px' }} />
                  )}
                />
              ))}
            </div>
            <RecentlyAdded />
          </div>
        </div>
        {type === 'list'
          ? (
          <table className={classes.table}>
            <thead className={classes.tHead}>
              <tr>
                {suppliersHeading
                  .filter((it, idx) => idx === 0)
                  .map((head) => (
                    <th className={classes.action} key={head.text}>
                      <div className={classes.actionContent}>
                        <CheckBoxOutlineBlankIcon
                          className={classes.actionIcon}
                        />
                        {head.text}
                      </div>
                    </th>
                  ))}
                {suppliersHeading
                  .filter((it, idx) => idx !== 0)
                  .map((head) => (
                    <th key={head.text}>{head.text}</th>
                  ))}
              </tr>
              <tr>
                <td colSpan={8}>
                  <hr style={{ backgroundColor: '#86B817', height: '2px' }} />
                </td>
              </tr>
            </thead>
            <tbody className={classes.tableBody}>
              {suppliersState?.pending.map((sup) => (
                <tr key={sup.id}>
                  <td className={classes.action}>
                    <div className={classes.actionContent}>
                      <CheckBoxOutlineBlankIcon
                        className={classes.actionIcon}
                      />
                      {sup.id.substring(0, 7)}
                    </div>
                  </td>
                  <td>{sup.email}</td>
                  <td>N/A</td>
                  <td style={{ display: 'flex', alignItems: 'center' }}>
                    <span>
                      <img src={flag} style={{ marginRight: '5px' }} />
                      Ivory Coast
                    </span>
                  </td>
                  <td>{sup.activity}</td>
                  <td>
                    {verified
                      ? (
                      <span className={classes.verified}>Verified</span>
                        )
                      : (
                      <span
                        className={`${classes.verified} ${classes.unverified}`}
                      >
                        Unverified
                      </span>
                        )}
                  </td>
                  <td
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      width: '100%'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '80%'
                      }}
                    >
                      {new Date(sup.createdAt).toDateString()}{' '}
                      <MoreVertOutlinedIcon
                        className={`${classes.actionIcon} ${classes.actionIconVertical}`}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            )
          : (
          <div className={classes.gridView}>
            {activeTab === 'Pending'
              ? (
                <>
                  {
                    suppliersState?.pending.map((sup) => (
                      <SupplierCard
                        key={sup.id}
                        id={sup.id?.substring(0, 7)}
                        email={sup.email}
                        date={new Date(sup.createdAt)?.toLocaleDateString()}
                      />
                    ))
                  }
                </>
                )
              : (
                <>
                  {
                    suppliersState?.accepted?.content?.map((sup) => (
                      <SupplierCard
                        key={sup.supplierProfile?.id}
                        id={sup.user.id?.substring(0, 7)}
                        email={sup.user.email}
                        date={new Date(sup.user?.createdAt)?.toLocaleDateString()}
                        title={sup?.supplierProfile?.merchantName}
                        formattedAddress={sup?.supplierPlace?.formattedAddress}
                        country={sup?.supplierPlace?.country}
                        logo={sup.profile?.picture}
                        accepted
                      />
                    ))
                  }
                </>
                )}
            {/* <SupplierCard />
            <SupplierCard /> */}
          </div>
            )}
        <Modal showModal={showModal}>
          <Form>
            <HeadingClose>
              <Heading>{t('invite-supplier')}</Heading>
              <StyledClose onClick={() => setShowModal(false)} />
            </HeadingClose>
            <Input
              label={t('supplier-email')}
              placeholder="ron123@gmail.co"
              margin="15px 0px 3px"
              width="100%"
              onKeyDown={handleKeyDown}
              value={mailAdition}
              onChange={handleChange}
              type="email"
              hasError={isValidEmail !== null && !isValidEmail}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {supliers.length
                ? supliers.map((sup) => (
                    <Crumb key={sup} value={sup} onDismiss={handleDeleteMail} />
                ))
                : null}
            </div>
            <TextArea
              onChange={(e) => setMessage(e?.target?.value)}
              label={t('invitation-note')}
              placeholder={t('write-supplier-note')}
              width="95%"
              value={message}
            />
            <ActionButtons>
              <Button
                text={t('copy-link')}
                width="100%"
                margin="0px 12px 0px 0px"
                bgColor="#fff"
                border="none"
                color="#E63F07"
                renderIcon={() => <StyledLink />}
                textMargin="0px 2px"
              />
              <Button
                disabled={!message || (supliers?.length === 0 && mailAdition?.trim()?.length === 0) || !isValidEmail}
                text={t('send-invitation')}
                width="100%"
                margin="0px 0px 0px 12px"
                bgColor="#E63F07"
                onClick={handleInvite}
              />
            </ActionButtons>
          </Form>
        </Modal>
      </Container>
    </Wrapper>
  );
};

export default Suppliers;
