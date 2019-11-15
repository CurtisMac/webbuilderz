import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//Styles
const PrimaryButton = styled(Link)`
  background-color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.pri1};
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  text-align: center;
  box-shadow: ${props => props.theme.shadow.box};
  min-width: 100px;
  display: inline-block;
  :hover {
    transform: scale(1.03);
  }
  :active {
    transform: scale(1);
    box-shadow: ${props => props.theme.shadow.boxActive};
  }
`
const InvertedButton = styled(PrimaryButton)`
  color: ${props => props.theme.colors[props.color]};
  border: 1.5px solid ${props => props.theme.colors[props.color]};
  background-color: white;
`

//Component
const index = props => {
  if (props.invert) {
    return (
      <InvertedButton {...props} to={props.to}>
        {props.children}
      </InvertedButton>
    )
  } else {
    return (
      <PrimaryButton {...props} to={props.to}>
        {props.children}
      </PrimaryButton>
    )
  }
}

export default index
