import React from "react";
import Footer from '../components/Footer'

export function FooterContainer() {
  return(
    <Footer>
      <Footer.Wrapper>
        <Footer.Column>
          <Footer.Title>Team Members</Footer.Title>
          <Footer.Link href="#">Cody</Footer.Link>
          <Footer.Link href="#">Christine</Footer.Link>
          <Footer.Link href="#">Caleb</Footer.Link>
          <Footer.Link href="#">Marcus</Footer.Link>
        </Footer.Column>
      </Footer.Wrapper>
    </Footer>

  )
}