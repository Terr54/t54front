import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  SearchPropTypes,
  StyledInputContainer,
  StyledInput,
  SearchButton,
  Container
} from './Search.styles';
import { useTranslation } from 'react-i18next';

const Search = ({
  inputStyle,
  containerStyle,
  hasError,
  className,
  errorFound = false,
  onChange,
  renderIcon,
  placeholder,
  errorMessage,
  width = '100%',
  margin = '',
  label,
  children,
  ...props
}: SearchPropTypes) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {toggleSearch
        ? (
        <div style={{ display: 'flex', width: '60%', alignItems: 'center' }}>
        <Container margin={margin}>
          <StyledInputContainer
            width={width}
            className={className}
            hasError={hasError}
            style={containerStyle ?? {}}
          >
            {renderIcon?.()}
            <StyledInput
              onChange={onChange}
              placeholder={placeholder}
              style={inputStyle ?? {}}
              {...props}
            />
            {children}
          </StyledInputContainer>
        </Container>
        <SearchButton onClick={() => setToggleSearch(!toggleSearch)} style={{ display: 'flex' }}>
            {t('search-text')}
        </SearchButton>
        </div>
          )
        : (
        <SearchButton onClick={() => setToggleSearch(!toggleSearch)} style={{ display: 'flex' }}>
            <SearchIcon style={{ color: '#666666', fontSize: '15px', marginRight: '6px' }} />
            {t('search-text')}
        </SearchButton>
          )}
    </>
  );
};

export default Search;
