import React from "react"
import styled from "styled-components"

//Components
import Button from "../styledButton"

//Assets
import whtBlb from "../../data/img/white_background_blob.svg"
import mblGrad from "../../data/img/white_background_mobile.svg"
import cyclist from "../../data/img/cyclist.svg"

//Styles
const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.pri3};
  background-image: url(${whtBlb}), ${props => props.theme.gradients.colour};
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: calc(100vh - ${props => props.theme.size.navHeader});
  padding: 0 2em;
  @media screen and (max-width: ${props => props.theme.screen.large}) {
    background-size: 115%;
  }
  @media screen and (max-width: 1350px) {
    background-size: 115%;
  }
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    background-size: 150%;
    background-image: ${props => props.theme.gradients.colour};
  }
`
const MobileGradient = styled.img`
  display: none;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: -2px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex: 1 0 auto;
  @media screen and (max-width: 1350px) {
    flex-flow: column;
  }
`
const TextContainer = styled.div`
  width: 60%;
  align-self: flex-start;
  padding: 5% 0 0 40px;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    padding: 13% 0 0 0;
    align-self: auto;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.screen.small}) {
    padding: 15% 0 0 0;
  }
`
const Title = styled.h1`
  color: ${props => props.theme.colors.sec1};
  font-weight: 700;
  font-size: 2em;
  /* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
  font-size: calc(32px + (72 - 32) * ((100vw - 768px) / (1800 - 768)));
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    font-size: 1.8em;
    text-align: center;
    color: white;
  }
  @media screen and (max-width: ${props => props.theme.screen.small}) {
    font-size: 1.5em;
    text-align: center;
    color: white;
    margin-top: 0;
  }
`
const Text = styled.p`
  color: ${props => props.theme.colors.sec1};
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    text-align: center;
    color: white;
    font-size: 1.2em;
  }
  @media screen and (max-width: ${props => props.theme.screen.small}) {
    margin-bottom: 5px;
  }
`
const ImgContainer = styled.div`
  width: 40%;
  @media screen and (max-width: 1800px) {
    align-self: flex-end;
  }
  @media screen and (max-width: 1800px) {
    width: 70%;
    margin-top: 25px;
  }
  @media screen and (max-width: ${props => props.theme.screen.large}) {
    width: 50%;
  }
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    align-self: auto;
    width: 70%;
  }
  @media screen and (max-width: ${props => props.theme.screen.small}) {
    width: 90%;
  }
`
const CyclistImg = styled.img`
  max-width: 100%;
  float: right;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    float: none;
  }
`
const ButtonContainer = styled.div`
  text-align: center;
  flex: 0 1 auto;
`
const StyledButton = styled(Button)`
  display: inline-block;
  margin: 25px auto 25px;
`

//Component
const index = props => {
  const cnt = props.content
  return (
    <Container>
      <FlexContainer>
        <MobileGradient src={mblGrad} alt="" />
        <TextContainer>
          <Title>{cnt.heroText}</Title>
          <Text>{cnt.heroSubText}</Text>
        </TextContainer>
        <ImgContainer>
          <CyclistImg src={cyclist} alt="" />
        </ImgContainer>
      </FlexContainer>
      <ButtonContainer>
        <StyledButton primary={1} to="/contact">
          GET IN TOUCH
        </StyledButton>
      </ButtonContainer>
    </Container>
  )
}

export default index
