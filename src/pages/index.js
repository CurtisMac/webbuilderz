import React from "react"
// import styled from "styled-components"
import { graphql } from "gatsby"

//Components
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import ArrowDivider from "../components/arrowDivider"
import About from "../components/home/about"
import WebDev from "../components/home/webDevelopment"
import Shopify from "../components/home/shopify"
import DigitalMarketing from "../components/home/digitalMarketing"
import OtherServices from "../components/home/otherServices"
import CTA from "../components/home/cta"
import { Container } from "../components/grid"

//Styles
// const Container = styled.div`
//   max-width: 1024px;
//   margin: 0 auto;
// `

const index = ({ data }) => (
  <Layout title="WebBuilderz ecommerce web development">
    <main>
      <Hero content={data.homeYaml.hero} />
      <Container>
        <ArrowDivider />
        <About content={data.homeYaml.about} />
        <WebDev content={data.homeYaml.webDev} />
        <Shopify content={data.homeYaml.shopify} />
        <DigitalMarketing content={data.homeYaml.marketing} />
        <OtherServices content={data.homeYaml.other} />
        <CTA content={data.homeYaml.cta} />
      </Container>
    </main>
  </Layout>
)

export default index

export const query = graphql`
  {
    homeYaml {
      hero {
        heroSubText
        heroText
      }
      about {
        title
        text
        subTitle
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      webDev {
        title
        text
        subTitle
        cards {
          color
          title
          text
          image {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      shopify {
        text
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      marketing {
        title
        subTitle
        text
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cards {
          title
          color
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      other {
        title
        cards {
          title
          text
          color
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      cta {
        text
        button
        btnColor
        bgColor
      }
    }
  }
`
