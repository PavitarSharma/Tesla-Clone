import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/cars/carSlice'
import { useSelector } from 'react-redux'


const Header = () => {
  const [closeMenu, setCloseMenu] = useState(false)

  const cars = useSelector(selectCars)
  console.log(cars);

  const handleCloseMenu = () => setCloseMenu(true)
  return (
    <Container>
      <Logo>
        <a href='#home'>
          <img src="/images/logo.svg" alt="" />
        </a>
      </Logo>

      <NavMenu>
        {cars && cars.map((car, index) => (
          <a href="#modelS" key={index}>{car}</a>
        ))}
      </NavMenu>

      <RightMenu>
        <a href="#shop">Shop</a>
        <a href="#account">Tesla Account</a>
        <Icon onClick={handleCloseMenu} />
      </RightMenu>

      <BurgerNav show={closeMenu}>
        <CloseWrapper>
          <CustomClose onClick={() => setCloseMenu(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}><a href="#modelS">{car}</a></li>
        ))}
        <li><a href="#home">Existing inventory</a></li>
        <li><a href="#home">Used Inventory</a></li>
        <li><a href="#home">Trade-in</a></li>
        <li><a href="#home">Cybertruck</a></li>
        <li><a href="#home">Roadstar</a></li>
        <li><a href="#home">Semi</a></li>
        <li><a href="#home">Charging</a></li>
        <li><a href="#home">Power</a></li>
        <li><a href="#home">Utilities</a></li>
        <li><a href="#home">Test Drive</a></li>
        <li><a href="#home">Shop</a></li>
        <li><a href="#home">Tesla Account</a></li>
      </BurgerNav>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`

const Logo = styled.div`
   img {
    @media (max-width: 428px) {
      width: 80px;
    }

    @media (max-width: 328px) {
      width: 60px;
    }
  }


`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  a {

      margin: 0 18px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      text-transform: uppercase;

      &:hover {
        color: #555;
      }

      @media (max-width: 948px) {
        display: none;
      }
  }
`

const RightMenu = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;

   a {
     margin: 0 10px;
     text-transform: uppercase;

     @media (max-width: 428px) {
       font-size: 16px;
       margin: 0 6px;
     }


     &:hover {
        color: #555;
      }

      @media (max-width: 328px) {
       display: none;
     }
   }

`

const Icon = styled(MenuIcon)`
  font-size: 30px !important;
  cursor: pointer;
  margin-left: 10px;

  @media (max-width: 428px) {
    font-size: 30px !important;
    margin-right: 16px;
  }

  @media (max-width: 328px) {
    font-size: 30px !important;
    margin-right: 2px;
  }
`

const BurgerNav = styled.div`
  background-color: #fff;
  width: 300px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
  z-index: 16;
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.4);


    a {
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;

      @media (max-width: 328px) {
        font-size: 14px;
        padding: 0 12px;
      }
    }

      @media (max-width: 328px) {
        scroll-behavior: scroll;
      }
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  font-size: 30px !important;
  cursor: pointer;
`

export default Header