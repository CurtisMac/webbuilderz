import React from "react"
import styled from "styled-components"
import shortid from "shortid"

//Components
import { Title } from "./styles"
import Card from "./card"

//Assets
import arrow from "../../data/img/arrow.svg"

//Styles
const Container = styled.div`
  margin: 100px 0;
`
const StyledTitle = styled(Title)`
  text-align: center;
`
const CardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
  @media (max-width: ${props => props.theme.screen.large}) {
    flex-flow: column;
    align-items: center;
  }
`
const StyledCard = styled(Card)`
  justify-content: flex-start;
  padding: 28px 20px;
  background-color: white;
`
const ArrowContainer = styled.div`
  height: 280px;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.xlarge}) {
    display: none;
  }
`
const LeftArrow = styled.img`
  transform: rotate(90deg) translate(15px, -30px);
  z-index: -1;
  position: relative;
`
const RightArrow = styled(LeftArrow)`
  transform: rotate(-90deg) translate(-15px, -30px);
`
const ArrowLine = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  height: 50%;
  width: 50%;
  z-index: -2;
  border-bottom: 1.5px solid ${props => props.theme.colors.pri1};
  @media (max-width: ${props => props.theme.screen.large}) {
    display: none;
  }
`
//Main Component
const index = props => {
  const cnt = props.content
  const cards = cnt.cards.map(e => {
    return (
      <StyledCard
        data={e}
        key={shortid.generate()}
        width="220px"
        height="280px"
        divider
      />
    )
  })
  return (
    <Container>
      <StyledTitle>{cnt.title}</StyledTitle>
      <CardContainer>
        <ArrowContainer>
          <LeftArrow src={arrow} alt="arrow outline" />
        </ArrowContainer>
        {cards}
        <ArrowContainer>
          <RightArrow src={arrow} alt="arrow outline" />
        </ArrowContainer>
        <ArrowLine />
      </CardContainer>
    </Container>
  )
}

export default index
