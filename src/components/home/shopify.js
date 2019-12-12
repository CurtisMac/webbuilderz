import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

//Components
import { SectionSpacing } from "./styles"

//Styles
const Container = styled.div`
  margin: ${SectionSpacing} 0;
  padding: 10px;
  @media (max-width: ${props => props.theme.screen.medium}) {
    padding: 30px 0;
  }
`
const Image = styled(Img)`
  margin: 0 auto 30px;
  max-width: 50%;
  @media (max-width: ${props => props.theme.screen.medium}) {
    max-width: 75%;
  }
`
const OuterBorderTop = styled.div`
  border-top: 1.5px solid grey;
  margin: 0 20%;
  padding-bottom: 10px;
`
const InnerBorder = styled.div`
  border: 2px solid grey;
  border-left: none;
  border-right: none;
  text-align: center;
  padding: 30px;
  @media (max-width: ${props => props.theme.screen.medium}) {
    padding: 30px 0;
  }
`
const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0;
  font-style: italic;
`
const OuterBorderBottom = styled(OuterBorderTop)`
  border-bottom: 1.5px solid grey;
  border-top: none;
  padding-top: 10px;
  padding-bottom: 0;
`

//Main Component
const index = props => {
  const cnt = props.content
  return (
    <Container>
      <OuterBorderTop />
      <InnerBorder>
        <Image fluid={cnt.image.childImageSharp.fluid} />
        <Text>
          When it comes to building eCommerce experiences, Shopify is our
          platform of choice. Find out more about{" "}
          <a href="https://shopify.com">Shopify</a>
        </Text>
      </InnerBorder>
      <OuterBorderBottom />
    </Container>
  )
}

export default index
