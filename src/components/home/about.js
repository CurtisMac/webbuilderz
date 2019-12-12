import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

//Components
import { Row, Column } from "../grid"
import { Title, SubTitle, Text, SectionSpacing } from "./styles"
import Button from "../styledButton"

//Assets
//Styles
const Parent = styled.div`
  margin: 110px 0 ${SectionSpacing.lg};
  @media (max-width: ${props => props.theme.screen.medium}) {
    margin: 30px 0 ${SectionSpacing.md};
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    margin: 30px 0 ${SectionSpacing.sm};
  }
`
const Image = styled.div`
  padding-right: 18%;
  @media (max-width: ${props => props.theme.screen.medium}) {
    padding: 10%;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    padding: 5%;
  }
  @media (max-width: ${props => props.theme.screen.xsmall}) {
    padding: 0;
  }
`
const ButtonWrapper = styled.div`
  margin-top: 35px;
`

//Component
const index = props => {
  const cnt = props.content
  return (
    <Parent>
      <Row margin={"30px 0"}>
        <Column col={6} col_md={12}>
          <Image>
            <Img
              fluid={cnt.image.childImageSharp.fluid}
              alt="people planning an ecommerce strategy"
            />
          </Image>
        </Column>
        <Column col={6} col_md={12} padding={"10px 0"}>
          <Title color="pri4">{cnt.title}</Title>
          <SubTitle>{cnt.subTitle}</SubTitle>
          <Text>{cnt.text}</Text>
          <ButtonWrapper>
            <Button to="/about" invert color="pri4">
              ABOUT US
            </Button>
          </ButtonWrapper>
        </Column>
      </Row>
    </Parent>
  )
}

export default index
