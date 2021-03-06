import React from "react"
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

const index = ({ data }) => (
  <Layout
    title={data.homeYaml.metadata.metaTitle}
    description={data.homeYaml.metadata.metaDesc}
  >
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
      metadata {
        metaTitle
        metaDesc
      }
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
            fluid(maxWidth: 680) {
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
