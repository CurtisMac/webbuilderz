import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

//Components
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import ArrowDivider from "../components/arrowDivider"

//Styles
const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const index = ({ data }) => (
  <Layout title="WebBuilderz ecommerce web development">
    <Hero content={data.hero} />
    <Container>
      <ArrowDivider />
    </Container>
  </Layout>
)

export default index

export const query = graphql`
  {
    hero: homeYaml {
      heroSubText
      heroText
    }
  }
`
