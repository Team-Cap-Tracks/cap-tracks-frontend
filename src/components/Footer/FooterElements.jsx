import styled from 'styled-components'
import { FooterLink as Link } from 'react-router-dom'

export const FooterArea = styled.footer`
  background: #272643;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: .5rem calc((100vw - 1200px) / 2);
  z-index: 10;
`
export const FooterText = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  align-content: flex-start;
  text-decoration: none;
  padding: 0 0rem;
  height: 100%;
  cursor: pointer;
  margin-right: 8%;
`

export const FooterLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  align-content: flex-start;
  text-decoration: none;
  padding: 0 0rem;
  height: 100%;
  cursor: pointer;
  margin-right: 8%;
`