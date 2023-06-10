import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Container,
  DropDownHeader,
  DropDownList,
  ListItem,
  Heading,
  selectProps
} from './Select.styles';
import { supportedLanguages } from '../../../i18n';
import { getLanguage, setLanguage } from '../../../storage/local.storage';

const LanguageSelect = ({
  bgColor,
  width,
  active = true,
  dropdownListStyle,
  ...props
}: selectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lang = getLanguage() ?? 'en';

  const toggleDropdown = () => setIsOpen(!isOpen);
  const onOptionClicked = (value: string) => {
    setIsOpen(false);
    if (lang !== value) {
      setLanguage(value);
      window.location?.reload();
    }
  };

  return (
    <Container {...props}>
      <DropDownHeader bgColor={bgColor} width={width} onClick={toggleDropdown}>
        <Heading style={{ textTransform: 'uppercase' }}>{lang}</Heading>
        <KeyboardArrowDownIcon style={{ fontSize: '15px' }} />
      </DropDownHeader>
      {isOpen && (
        <DropDownList style={dropdownListStyle}>
          {supportedLanguages.map((option) => (
            <ListItem
              active={lang === option}
              onClick={() => onOptionClicked(option)}
              key={option}
              style={{ textTransform: 'uppercase' }}
            >
              {option}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </Container>
  );
};

export default LanguageSelect;
