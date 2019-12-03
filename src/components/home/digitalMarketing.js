import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import shortid from "shortid"

//Components
import { Row, Column } from "../grid"
import { SectionSpacing, Title, SubTitle, Text } from "./styles"
// import Button from "../styledButton"

//Styles
const Container = styled.div`
  margin: ${SectionSpacing} 0;
`
const ImgColumn = styled(Column)`
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.medium}) {
    order: 3;
  }
`
const MainImg = styled(Img)`
  width: 100%;
  @media (max-width: ${props => props.theme.screen.medium}) {
    width: 80%;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    width: 100%;
  }
`
//Main Component
const index = props => {
  const cnt = props.content
  return (
    <Container>
      <Row>
        <ImgColumn col={6} col_md={12} padding="10px 25px">
          <MainImg
            fluid={cnt.image.childImageSharp.fluid}
            alt="Digital marketing image"
          />
        </ImgColumn>
        <Column
          col={6}
          col_md={12}
          order={2}
          align="center"
          padding="10px 15px"
        >
          <Title color="pri1">{cnt.title}</Title>
          <SubTitle>{cnt.subTitle}</SubTitle>
          <Text>{cnt.text}</Text>
        </Column>
      </Row>
    </Container>
  )
}

export default index
