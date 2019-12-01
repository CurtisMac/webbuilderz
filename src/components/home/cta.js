import React from "react"
import styled from "styled-components"

//Components
import Button from "../styledButton"
import { SectionSpacing, Title } from "./styles"

//Styles
const Container = styled.div`
  margin: ${SectionSpacing} 0 0;
  min-height: 260px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`
const BG = styled.div`
  background-color: ${props => props.theme.colors[props.color]};
  height: 260px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
`
const Text = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 75px;
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: ${props => props.theme.screen.small}) {
    margin-bottom: 50px;
  }
`
const index = props => {
  const cnt = props.content
  return (
    <div>
      <Container>
        <BG color={cnt.bgColor} />
        <Text>{cnt.text.toUpperCase()}</Text>
        <Button to="/about" color={cnt.btnColor}>
          {cnt.button.toUpperCase()}
        </Button>
      </Container>
    </div>
  )
}

export default index
