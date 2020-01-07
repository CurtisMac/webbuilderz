import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//Components
import { Container } from "./grid"

//Styles
const Parent = styled.footer`
  background-color: ${props => props.theme.colors.pri2};
`
const Items = styled.div`
  min-height: 110px;
  color: ${props => props.theme.colors.pri1};
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.medium}) {
    flex-flow: column;
  }
`
const Nav = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  margin: 16px 0;
  @media (max-width: ${props => props.theme.screen.medium}) {
    margin-top: 32px;
  }
  @media (max-width: 500px) {
    flex-flow: column;
    align-items: center;
  }
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.pri1};
  padding: 0 16px;
  text-decoration: none;
  font-size: 1.1rem;
  @media (max-width: 500px) {
    padding-bottom: 16px;
  }
`

const index = () => {
  return (
    <Parent>
      <Container>
        <Items>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
            <StyledLink to="/terms-of-use">Terms of Use</StyledLink>
          </Nav>
          <p>&copy;2019 Webbuilderz</p>
        </Items>
      </Container>
    </Parent>
  )
}

export default index
