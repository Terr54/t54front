import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
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
  navbarProps,
  Summary,
  Summaries
} from './Navbar.styles'
import classes from './navbar.module.css'
import profile from '../../../assets/pictures/profile-placeholder.png'
import Notification from '../notification/Notification'
import CartItem from '../../cart-item/CartItem.component'
import cover from '../../../assets/pictures/spices2.png'
import flag from '../../../assets/pictures/NigerianFlag.svg'
import { useDispatch, useSelector } from '../../../store'
import DropDownProfile from '../avatar-wrapper/AvatarWrapper'
import Button from '../controls/button/Button.component';

const Navbar = ({ showCartIcon = true, showProfile = true, showLogo = true, logoItemsWidth = '40%', width }: navbarProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [popup, setPopup] = useState<Window | null>(null)
  const [showCart, setShowCart] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

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
            <LoggedHeader>
              <LoggedHeader>
                {
                  showLogo && (
                    <Logo width={100} height={28} />
                  )
                }
                <Input
                  label=''
                  placeholder={`${t('search')} ${t('products')}`}
                  width='96%'
                  margin='0px 40px 0px 40px'
                  containerStyle={{
                    backgroundColor: '#F6F6F6',
                    padding: '0px 10px'
                  }}
                  iconAfter
                  renderIcon={() => (
                    <SearchIcon
                      color='disabled'
                      fontSize='small'
                      style={{ marginRight: '6px' }}
                    />
                  )}
                />
              </LoggedHeader>
              <LoggedItems logoItemsWidth={logoItemsWidth}>
                <div>
                  {
                    openProfile && <DropDownProfile />
                  }
                  {
                  showProfile && (
                    <Avatar
                      src={profile}
                      onClick={() => setOpenProfile((prev) => !prev)}
                    />
                  )
                }
                </div>
                {
                  showCartIcon && (
                  <>
                  <Notification
                    renderIcon={() => (
                      <AddShoppingCartIcon fontSize='small' />
                    )}
                    bgColor='#F6F6F6'
                    onClick={() => {
                      console.log('cllicked')
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
                <LanguageSelect
                  text='EN'
                  dropdownListStyle={{ background: '#eee' }}
                  />
              </LoggedItems>
            </LoggedHeader>
              )
            : (
            <>
              <div
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}
              >
               <div style={{ display: 'flex', alignItems: 'center' }}>
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
        <div className={classes.mobileNav}>
          <Logo width={80} height={18} />
          <MenuIcon onClick={() => { setShowSidebar(true); }} />
        </div>
        {
          showSidebar && (
            <div className={classes.sideContent}>
                <div className={classes.closeIcon}>
                  <CloseIcon onClick={() => setShowSidebar(false)} />
                </div>
                <div className={classes.linkwrapper}>
                  {navLinks.map((link) => (
                    <LinkTab
                      key={link.id}
                      activeTab={activeIndex === link.id}
                      onClick={() => {
                        setShowSidebar(false);
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
                {
                  !payload?.profile &&
                    <div className={classes.actionButton}>
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
                    </div>
                }
            </div>
          )
        }
      </NavContainer>
      {showCart && (
        <ModalWrapper
          borderRadius='4px'
          width='34%'
          height='90vh'
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
          <Summaries>
            <Summary>
                <span style={{ color: '#666666' }}>Subtotal</span>
                <span><span style={{ color: '#666666' }}>€</span>17,600</span>
            </Summary>
            <Summary>
                <span style={{ color: '#666666' }}>Shipping</span>
                <span><span style={{ color: '#666666' }}>€</span>200</span>
            </Summary>
            <hr />
            <Summary>
                <span>Total</span>
                <span><span style={{ color: '#666666' }}>€</span>17,800</span>
            </Summary>
          </Summaries>
          <Button text='checkout' onClick={() => { navigate(path.CHECKOUTSUMMARY); setShowCart(false) }} bgColor='#E63F07' renderIcon={() => <ArrowForwardIcon />} iconAfter width='100%' style={{ marginTop: '15px' }} />
        </ModalWrapper>
      )}
    </>
  )
}

export default Navbar
