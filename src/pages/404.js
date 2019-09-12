import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

//Assets
import logo from "../data/img/logo.svg"

//Styles
const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.pri3};
  background-image: ${props =>
    `linear-gradient(to top left, ${props.theme.colors.sec3}, ${props.theme.colors.pri3})`};
  height: 100vh;
  padding: 2em;
  margin: auto 0;
  color: white;
  @media only screen and (max-width: 1000px) {
    padding: 5em;
  }
  @media only screen and (max-width: 750px) {
    padding: 2em;
  }
`
const H1 = styled.h1`
  font-size: 4em;
`
const Logo = styled.img`
  max-width: 50%;
  display: block;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 750px) {
    max-width: 100%;
  }
`
const StyledLink = styled(Link)`
  display: block;
  color: white;
`

//Component
const index = () => (
  <Layout>
    <Container>
      <StyledLink to="/">
        <Logo src={logo} alt="Logo" />
      </StyledLink>
      <H1>404</H1>
      <p>Sorry, something went wrong and we can't seem to find that page.</p>
      <p>
        <StyledLink to="/">Return to the home page.</StyledLink>
      </p>
    </Container>
  </Layout>
)

export default index
