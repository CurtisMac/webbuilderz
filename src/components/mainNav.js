import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//Components

//Assets
import logo from "../data/img/logo.svg"

//Styles
const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  height: ${props => props.theme.size.navHeader};
  margin: 0 25px 0;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    flex-flow: column;
    align-items: center;
  }
`
const Logo = styled.img`
  width: 30vw;
  padding-top: 20px;
  @media screen and (max-width: ${props => props.theme.screen.large}) {
    width: 45vw;
  }
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    width: 60vw;
  }
  @media screen and (max-width: ${props => props.theme.screen.small}) {
    width: 90vw;
  }
`
const LinkList = styled.ul`
  list-style-type: none;
  margin: 0 0 0 25px;
  padding: 0;
  padding-top: 25px;
  display: flex;
  flex-flow: row nowrap;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    padding-top: 0;
  }
`
const ListItem = styled.li`
  margin: 10px 10px 0 0;
  padding: 0;
  text-transform: uppercase;
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.sec1};
  text-decoration: none;
  :hover {
    color: ${props => props.theme.colors.pri3};
  }
`

//JS
const ListLink = props => (
  <ListItem>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </ListItem>
)

//Main Component
export default () => (
  <Container>
    <Link to="/">
      <Logo src={logo} alt="webbuilderz logo" />
    </Link>
    <LinkList>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </LinkList>
  </Container>
)
