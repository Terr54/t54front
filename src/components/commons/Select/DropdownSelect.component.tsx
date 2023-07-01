import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Container,
  DropDownHeader,
  DropDownList,
  ListItem,
  Heading,
  SelectProps,
  OptionSelect
} from './Select.styles';

const DropdownSelect = ({
  bgColor,
  width,
  value,
  placeholder,
  dropdownListStyle,
  values,
  onOptionSelect,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const onOptionClicked = (option: OptionSelect) => {
    setIsOpen(false);
    onOptionSelect?.(option);
  };

  return (
    <Container {...props}>
      <DropDownHeader bgColor={bgColor} width={width} onClick={toggleDropdown}>
        <Heading style={{ textTransform: 'uppercase' }}>{value ?? placeholder}</Heading>
        <KeyboardArrowDownIcon style={{ fontSize: '15px' }} />
      </DropDownHeader>
      {isOpen && (
        <DropDownList style={dropdownListStyle}>
          {values?.map((option) => (
            <ListItem
              active={value === (option.value ?? option.option) }
              onClick={() => onOptionClicked(option)}
              key={option.value ?? option.option}
              style={{ textTransform: 'uppercase' }}
            >
              {option.option}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </Container>
  );
};

export default DropdownSelect;
