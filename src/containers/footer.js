import React from "react";
import Footer from '../components/Footer'

export function FooterContainer() {
  return(
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Team Members</Footer.Title>
            <Footer.Link href="#"><i className="bi bi-emoji-smile"></i> Cody</Footer.Link>
            <Footer.Link href="#"><i className="bi bi-incognito"></i> Christine</Footer.Link>
            <Footer.Link href="#"><i className="bi bi-robot"></i> Caleb</Footer.Link>
            <Footer.Link href="#"><i className="bi bi-emoji-sunglasses"></i> Marcus</Footer.Link>
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