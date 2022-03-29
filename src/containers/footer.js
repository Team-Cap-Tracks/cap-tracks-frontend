import React from "react";
import Footer from '../components/Footer'
import { Link, Navigate } from 'react-router-dom'

export function FooterContainer() {
  return(
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Team Members</Footer.Title>
            <a 
              className='footerlink' 
              href='https://www.linkedin.com/in/codygravley/'
              target='_blank' 
              rel='noreferrer'>
              <i className="bi bi-emoji-smile"></i> 
              Cody
            </a>
            <a 
              className='footerlink' 
              href='https://www.linkedin.com/in/christine-davis-808/'
              target='_blank' 
              rel='noreferrer'>
              <i className="bi bi-incognito"></i> 
              Christine
            </a>
            <a 
              className='footerlink' 
              href='https://www.linkedin.com/in/caleb-vietinghoff/'
              target='_blank' 
              rel='noreferrer'>
              <i className="bi bi-emoji-smile"></i> 
              Caleb
            </a>
            <a 
              className="footerlink" 
              href='https://www.linkedin.com/in/marcus-lindbloom/' 
              target='_blank' 
              rel='noreferrer'>
              <i className="bi bi-emoji-sunglasses">
              </i> Marcus
            </a>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>What goes here?</Footer.Title>
            <Footer.Link href="#">Jokes?</Footer.Link>
            <Footer.Link href="#">Confessions?</Footer.Link>
            <Footer.Link href="#">More info about us?</Footer.Link>
            <Footer.Link href="#">Who knows</Footer.Link>
            
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Info><i className="bi bi-telephone"> 480-842-9151</i></Footer.Info>
            <Footer.Info href="#"><i className="bi bi-envelope"></i> email@gmail.com</Footer.Info>
            <Footer.Info href="#"><i className="bi bi-building"></i> 509 7th St NW</Footer.Info>
            <Footer.Info href="#"><i className="bi bi-twitter"></i> @GA
            </Footer.Info>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>

  )
}