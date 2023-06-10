import React from 'react'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {
  cartItemProps,
  Image,
  Container,
  TitleDelete,
  Title,
  Country,
  Type,
  Total,
  Input,
  Amount,
  Counters
} from './CartItem.styles'
import DeleteIcon from '../../assets/svg-icon/DeleteIcon'

const CartItem = ({
  heading,
  height,
  countryFlag,
  country,
  quantity,
  MOQ,
  packaging,
  processing,
  incoterm,
  type,
  selected,
  onSelect,
  onUnSelect,
  cover
}: cartItemProps) => {
  return (
    <Container>
      {selected
        ? (
        <CheckCircleRoundedIcon
          fontSize="small"
          onClick={onSelect}
          style={{ color: '#E63F07', cursor: 'pointer' }}
        />
          )
        : (
        <RadioButtonUncheckedOutlinedIcon
          onClick={onUnSelect}
          color="disabled"
          fontSize="small"
          style={{ cursor: 'pointer' }}
        />
          )}
      <Image>
        <img src={cover} alt="cover" />
      </Image>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <TitleDelete>
            <Title>{heading}</Title>
            <DeleteIcon width="14" height="16" style={{ cursor: 'pointer' }} />
          </TitleDelete>
          <Country>
            <span style={{ color: '#666666' }}>
              Origin:
            </span>
            <img
              src={countryFlag}
              style={{ width: '30px', height: '16px', margin: '0px 2px' }}
            />
            {country}
          </Country>
          <Country>
            <span style={{ color: '#666666', marginRight: 6 }}>
              Processing Method:
            </span>
            {processing}
          </Country>
          <Type>
            {type}
          </Type>
          <Total>
            <Counters>
              <div style={{ display: 'flex', width: '100%' }}>
              <AddOutlinedIcon style={{ borderRadius: '4px', backgroundColor: '#F6F6F6', padding: '6px', fontSize: '12px' }} />
              <Input />
              <RemoveOutlinedIcon style={{ borderRadius: '4px', backgroundColor: '#F6F6F6', padding: '6px', fontSize: '12px' }} />
              <div style={{ margin: '0px 0px 0px 10px', padding: '3px 4px', borderRadius: '4px', backgroundColor: '#F6F6F6', fontSize: '12px', display: 'flex', alignItems: 'center', color: '#666666' }}>
                Kg <ExpandMoreOutlinedIcon fontSize='small' style={{ color: '#666666' }} />
              </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '70%' }}>
              <span style={{ color: '#666666', marginRight: '10px' }}>EUR</span>
              <Amount>12, 000</Amount>
              </div>
            </Counters>
          </Total>
      </div>
    </Container>
  )
}

export default CartItem
