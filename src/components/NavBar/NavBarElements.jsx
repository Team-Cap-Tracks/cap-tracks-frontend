import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const Nav = styled.nav`
  background: #272643;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: .5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const NavLink = styled(Link)`
  font-family: poppins;
  font-weight: bold;
  color: #fff;
  ${'' /* color: #2C698D; */}
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`
export const NavLinkLeft = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 .5rem;
  height: 100%;
  cursor: pointer;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`




