import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//Styles
const Button = styled(Link)`
  background-color: ${props => props.theme.colors.pri1};
  color: ${props => (props.primary ? "black" : "blue")};
  padding: 15px 30px;
  text-decoration: none;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  text-align: center;
  box-shadow: ${props => props.theme.shadow.box};
`

//Component
const index = props => (
  <Button {...props} to={props.to}>
    {props.children}
  </Button>
)

export default index
