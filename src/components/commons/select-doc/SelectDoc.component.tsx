import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { Container, Span, selectDocProps } from './SelectDoc.styles';

const SelectDoc = ({ text, checked, onView, onClick }: selectDocProps) => {
  return (
    <Container>
      {checked
        ? (
        <CheckBoxIcon color='primary' style={{ fontSize: '14px', cursor: 'pointer' }} />
          )
        : (
        <CheckBoxOutlineBlankIcon
          onClick={onClick}
          color='disabled'
          style={{ fontSize: '14px', cursor: 'pointer' }}
        />
          )}
      <Span>{text}</Span>
      <AttachmentIcon color='primary' onClick={onView} style={{ fontSize: '14px', cursor: 'pointer' }} />
    </Container>
  );
};

export default SelectDoc;
