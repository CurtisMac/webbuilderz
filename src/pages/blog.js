import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

//Components
import { Container } from "../components/grid"
import Card from "../components/blog/card"

//Styles
const Content = styled.div`
  ${props => `min-height: calc(100vh - ${props.theme.size.navHeader} - 110px)`}
`
const Title = styled.h1`
  color: ${props => props.theme.colors.pri2};
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: 2rem;
  }
`
const IntroText = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.pri2};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: 1.2rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 100px 0;
  justify-content: center;
  @media (max-width: ${props => props.theme.screen.small}) {
    margin: 50px 0;
  }
`

export default ({ data }) => {
  const cards = data.allFile.edges.map(e => {
    const { id, frontmatter, fields } = e.node.childMarkdownRemark
    return <Card key={id} data={frontmatter} slug={fields.slug}></Card>
  })
  return (
    <Layout title="Blog || WebBuilderz" description="WebBulderz Blog">
      <Container>
        <Content>
          <Title>WebBuilderz Blog</Title>
          <IntroText>
            Welcome to our blog, here you will find all kinds of great content
            about all things Shopify & eCommerce.
          </IntroText>
          <Cards>{cards}</Cards>
        </Content>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      edges {
        node {
          childMarkdownRemark {
            id
            fields {
              slug
            }
            frontmatter {
              author
              alt
              cats {
                category
                otherCat
                tagList
              }
              pub_date
              title
              update_date
              image {
                childImageSharp {
                  fixed(height: 128) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
