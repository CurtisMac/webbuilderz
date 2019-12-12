import React from "react"
import styled from "styled-components"
import shortid from "shortid"

//Components
import { Row, Column } from "../grid"
import { Title, SubTitle, Text } from "./styles"
import Button from "../styledButton"
import Card from "./card"

//Assets
// import bg from "../../data/img/triangle_background.svg"

//Styles
const StyledRow = styled(Row)`
  margin: 100px 0 0;
  @media (max-width: ${props => props.theme.screen.small}) {
    margin: 75px 0 0;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 210px);
  grid-template-rows: repeat(5, 105px);
  grid-gap: 15px 15px;
  justify-content: end;
  @media (max-width: ${props => props.theme.screen.large}) {
    justify-content: center;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    grid-template-columns: 210px;
    grid-template-rows: repeat(4, 210px);
  }
`
const GridChild = styled(Card)`
  margin: 0;
  :nth-child(1) {
    align-self: end;
    justify-self: end;
    grid-column: 1/2;
    grid-row: 1/3;
  }
  :nth-child(2) {
    align-self: end;
    justify-self: start;
    grid-column: 2/3;
    grid-row: 2/4;
  }
  :nth-child(3) {
    align-self: start;
    justify-self: end;
    grid-column: 1/2;
    grid-row: 3/5;
  }
  :nth-child(4) {
    align-self: start;
    justify-self: start;
    grid-column: 2/3;
    grid-row: 4/6;
  }
  :nth-child(n + 5) {
    display: none;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    :nth-child(n + 1) {
      align-self: center;
      justify-self: center;
      grid-column: 1/2;
      grid-row: auto;
    }
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`
//Components
const CardCollection = props => {
  const cards = props.data.map(e => {
    return (
      <GridChild
        data={e}
        key={shortid.generate()}
        height="210px"
        width="210px"
      />
    )
  })
  return <Grid>{cards}</Grid>
}

const index = props => {
  const cnt = props.content
  return (
    <>
      <StyledRow>
        <Column col={5} col_lg={12} padding={"10px 0"} align="center">
          <Title color="pri3">{cnt.title}</Title>
          <SubTitle>{cnt.subTitle}</SubTitle>
          <Text>{cnt.text}</Text>
        </Column>
        <Column col={7} col_lg={12} padding={"10px 0"}>
          <CardCollection data={cnt.cards} />
        </Column>
      </StyledRow>
      <ButtonWrapper>
        <Button to="/contact" color="pri3">
          CONTACT US
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default index
