import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'

import { navLinks } from '../../../routes/links'
import { path } from '../../../routes/paths'
import Avatar from '../avatar/Avatar.component'
import Input from '../input/Input.component'
import ModalWrapper from '../../modal-wrapper/ModalWrapper.component'
import Logo from '../logo/Logo'
import LanguageSelect from '../Select/LanguageSelect.component'
import {
  NavContainer,
  Content,
  LinkTab,
  StyledNavButton,
  LoggedHeader,
  LoggedItems,
  CartItems,
  navbarProps
} from './Navbar.styles'
import classes from './navbar.module.css'
import profile from '../../../assets/pictures/profile-placeholder.png'
import Notification from '../notification/Notification'
import CartItem from '../../cart-item/CartItem.component'
import cover from '../../../assets/pictures/spices2.png'
import flag from '../../../assets/pictures/NigerianFlag.svg'
import { useDispatch, useSelector } from '../../../store'

const VendorNavbar = ({ showCartIcon = true, showProfile = true, showLogo = true, logoItemsWidth = '40%', width }: navbarProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [popup, setPopup] = useState<Window | null>(null)
  const [showCart, setShowCart] = useState<boolean>(false);

  const { payload } = useSelector((state) => state.user);

  const handleOpenMarketPopup = () => {
    if (popup == null || popup.closed) {
      setPopup(
        window.open(
          t('market-on-canva-url'),
          't54canvas',
          'scrollbars=yes,top=200,left=200,width=800,height=800'
        )
      )
    } else {
      popup?.focus()
    }
  }
  useEffect(() => {
    setActiveIndex(navLinks.findIndex((l) => l.url === location.pathname))
  }, [location])

  return (
    <>
      <NavContainer width={width}>
        <Content>
          {payload?.profile
            ? (
            <>
              <LoggedHeader>
              <LoggedItems logoItemsWidth={logoItemsWidth}>
                {
                  showProfile && (
                    <Avatar src={profile} />
                  )
                }
                {
                  showCartIcon && (
                  <>
                  <Notification
                    renderIcon={() => (
                      <ShoppingBasketOutlinedIcon fontSize='small' />
                    )}
                    bgColor='#F6F6F6'
                    onClick={() => {
                      setShowCart(!showCart)
                    }}
                  />
                  </>
                  )
                }
                <Notification
                  renderIcon={() => <NotificationsNoneIcon fontSize='small' />}
                  bgColor='#F6F6F6'
                  cBgColor='#E63F07'
                  counter='1'
                  cColor='#fff'
                />
              </LoggedItems>
            </LoggedHeader>
              <LanguageSelect
              style={{ justifySelf: 'flex-end' }}
              text='EN'
              dropdownListStyle={{ background: '#eee' }}
              />
            </>
              )
            : (
            <>
              <div
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Logo width={95} height={28} />
                <div className={classes.linkwrapper}>
                  {navLinks.map((link) => (
                    <LinkTab
                      key={link.id}
                      activeTab={activeIndex === link.id}
                      onClick={() => {
                        setActiveIndex(link.id)
                        if (link.url === path.MARKET) {
                          handleOpenMarketPopup()
                        }
                      }}
                    >
                      <Link
                        style={{
                          textTransform: 'none',
                          textDecoration: 'none',
                          color: activeIndex === link.id ? '#E63F07' : '#333'
                        }}
                        to={link.url}
                      >
                        {t(link.label)}
                      </Link>
                    </LinkTab>
                  ))}
                </div>
                <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <StyledNavButton
                  text={t('sign-in')}
                  bgColor='rgba(134, 184, 23, 1)'
                  onClick={() => navigate(path.SIGNIN)}
                />
                <StyledNavButton
                  text={t('get-started')}
                  bgColor='rgba(230, 63, 7, 1)'
                  width={23}
                  onClick={() => navigate(path.SIGNUP)}
                />
              <LanguageSelect
                text='EN'
                dropdownListStyle={{ background: '#eee' }}
                />
              </div>
              </div>
            </>
              )}
        </Content>
      </NavContainer>
      {showCart && (
        <ModalWrapper
          borderRadius='4px'
          width='34%'
          height='80vh'
          heading='Basket'
          showModal={showCart}
          onClose={() => setShowCart(false)}
          padding='22px'
        >
          <CartItems>
            <CartItem
              cover={cover}
              heading='Dried Nigerian Ginger'
              country='Nigeria'
              countryFlag={flag}
              processing='Dried'
              type='Terre Basics'
            />
            <CartItem
              cover={cover}
              heading='Dried Nigerian Ginger'
              country='Nigeria'
              countryFlag={flag}
              processing='Dried'
              type='Terre Basics'
            />
            <CartItem
              cover={cover}
              heading='Dried Nigerian Ginger'
              country='Nigeria'
              countryFlag={flag}
              processing='Dried'
              type='Terre Basics'
            />
          </CartItems>
        </ModalWrapper>
      )}
    </>
  )
}

export default VendorNavbar
