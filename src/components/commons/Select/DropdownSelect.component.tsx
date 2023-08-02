import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import pic from '../../../assets/pictures/banner.png';
import {
  Container,
  DropDownHeader,
  DropDownList,
  ListItem,
  Heading,
  SelectProps,
  OptionSelect,
  ListItemImage,
} from './Select.styles';

const DropdownSelect = ({
  bgColor,
  width,
  value,
  placeholder,
  dropdownListStyle,
  values,
  onOptionSelect,
  style,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const onOptionClicked = (option: OptionSelect) => {
    setIsOpen(false);
    onOptionSelect?.(option);
  };

  return (
    <Container style={{ ...(style ?? {}), width: '100%' }} {...props}>
      <DropDownHeader bgColor={bgColor} width={width} onClick={toggleDropdown}>
        <Heading style={{ textTransform: 'uppercase' }}>
          {value ?? placeholder}
        </Heading>
        <KeyboardArrowDownIcon style={{ fontSize: '15px' }} />
      </DropDownHeader>
      {isOpen && (
        <DropDownList style={dropdownListStyle}>
          {values?.map((option) => (
            <ListItem
              active={value === (option.value ?? option.option)}
              onClick={() => onOptionClicked(option)}
              key={option.value ?? option.option}
              style={{ textTransform: 'uppercase' }}
            >
              {option.option}
              {
                option?.image && <ListItemImage
                src={option?.image}
                alt='pic'
              />
              }
            </ListItem>
          ))}
        </DropDownList>
      )}
    </Container>
  );
};

export default DropdownSelect;
