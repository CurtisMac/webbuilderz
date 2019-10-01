import React from "react"
import shortid from "shortid"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//Styles
const Card = styled.div`
  max-width: 350px;
  min-width: 280px;
  border-radius: 10px;
  margin: 75px 5px 10px;
  box-shadow: 3px 3px 10px #929292;
  background-color: white;
  /* ${props => {
    if (props.num === 1) {
      return `transform: scale(1.08);`
    }
  }} */
`
const Header = styled.div`
  background-color: ${props => props.theme.colors.pri3};
  background-image: ${props => props.theme.gradients.colour};
  padding: 15px;
  border-radius: 10px 10px 0 0;
  color: ${props => props.theme.colors.pri1};
  text-align: center;
`
const Price = styled.p`
  font-size: 1.8em;
  margin: 12px 0;
  ::before {
    content: "£";
  }
  font-weight: 700;
`
const OrigPrice = styled.p`
  font-size: 1.2em;
  margin: 12px 0;
`
const OrigPriceSpan = styled.span`
  ::before {
    content: "£";
  }
  text-decoration: line-through;
`
const Title = styled.h3`
  font-size: 1.2em;
  margin: 12px 0;
`
const StyledImg = styled.div`
  margin-top: -60px;
  height: 100px;
`
const Body = styled.div`
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
`
const StyledList = styled.ul`
  margin: 0 10px 20px 25px;
  padding: 10px;
`
//Component
export default props => {
  const features = props.data.features.map(e => {
    return <li key={shortid.generate()}>{e}</li>
  })
  return (
    <Card num={props.num}>
      <Header>
        <StyledImg>
          <Img fixed={props.img} />
        </StyledImg>
        <OrigPrice>
          was <OrigPriceSpan>{props.data.origPrice.gbp}</OrigPriceSpan>
        </OrigPrice>
        <Price>{props.data.price.gbp}</Price>
        <Title>{props.data.title}</Title>
      </Header>
      <Body>
        <StyledList>{features}</StyledList>
      </Body>
    </Card>
  )
}
