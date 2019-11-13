import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

//Components
import Layout from "../components/layout"
import Landing from "../components/home/landing"
import SubLanding from "../components/home/subLanding"
import Pricing from "../components/home/Pricing"
import ArrowDivider from "../components/arrowDivider"

//Styles
const Container = styled.div`
  background-color: ${props => props.theme.colors.pri3};
  background-image: ${props => props.theme.gradients.colour};
  background-attachment: fixed;
`

const index = ({ data }) => (
  <Layout title="WebBuilderz ecommerce web development">
    <Container>
      <Landing content={data.landing} />
      <ArrowDivider />
      <Pricing />
      <SubLanding />
    </Container>
  </Layout>
)

export default index

export const query = graphql`
  {
    landing: homeYaml {
      heroSubText
      heroText
    }
  }
`
