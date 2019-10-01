import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
//import Img from "gatsby-image"

//Componets
import Card from "./pricingCard"

//Styles
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 20px 0;
  @media screen and (max-width: ${props => props.theme.screen.large}) {
    flex-flow: column;
    align-items: center;
  }
`

//Component
export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        text: allPricingJson {
          edges {
            node {
              id
              title
              features
              price {
                gbp
                cad
              }
              origPrice {
                gbp
                cad
              }
            }
          }
        }
        img0: file(relativePath: { eq: "cart.png" }) {
          childImageSharp {
            fixed(width: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img1: file(relativePath: { eq: "med_store.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img2: file(relativePath: { eq: "large_store.png" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  const cards = data.text.edges.map((e, i) => {
    return (
      <Card
        key={e.node.id}
        data={e.node}
        num={i}
        img={data[`img${String(i)}`].childImageSharp.fixed}
      />
    )
  })
  return <Container>{cards}</Container>
}
