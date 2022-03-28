import React from "react";
import Footer from '../components/Footer'

export function FooterContainer() {
  return(
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Team Members</Footer.Title>
            <Footer.Link href="#">Cody</Footer.Link>
            <Footer.Link href="#">Christine</Footer.Link>
            <Footer.Link href="#">Caleb</Footer.Link>
            <Footer.Link href="#">Marcus</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Github Repository</Footer.Title>
            <Footer.Link href="#">Cody</Footer.Link>
            <Footer.Link href="#">Christine</Footer.Link>
            <Footer.Link href="#">Caleb</Footer.Link>
            <Footer.Link href="#">Marcus</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Info><i class="bi bi-telephone"> 480-842-9151</i></Footer.Info>
            <Footer.Info href="#"><i class="bi bi-envelope"></i> email@gmail.com</Footer.Info>
            <Footer.Link href="#"><i class="bi bi-building"></i> 509 7th St NW</Footer.Link>
            <Footer.Link href="#">Marcus</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>

  )
}