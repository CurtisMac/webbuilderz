import React from "react"
import styled from "styled-components"
//import { graphql } from "gatsby"
//import Img from "gatsby-image"

//Assets
import logo from "../../data/img/logo.svg"
import whtBlb from "../../data/img/white_background_blob.svg"
import cyclist from "../../data/img/cyclist.svg"

//Styles
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: ${props => props.theme.colors.pri3};
  background-image: url(${whtBlb}), ${props => props.theme.gradients.colour};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 2em;
`
const ChildContainer = styled.div`
  width: 50%;
  text-align: center;
`
const Logo = styled.img`
  max-width: 100%;
`
const CyclistImg = styled.img`
  max-width: 100%;
`
//Component
const index = ({ data }) => (
  <Container>
    <ChildContainer>
      <Logo src={logo} alt="Logo" />
      <p>eCommerce Web Development</p>
    </ChildContainer>
    <ChildContainer>
      <CyclistImg src={cyclist} alt="" />
    </ChildContainer>
  </Container>
)

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "img/logo.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
//<Img fluid={data.file.childImageSharp.fluid} alt="some alt" />
export default index
