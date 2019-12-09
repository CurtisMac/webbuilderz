import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container } from "../components/grid"

//Styles
const Body = styled.div`
  margin-bottom: 75px;
  min-height: 100vh;
`
const Title = styled.h1`
  text-align: center;
`
const StyledDate = styled.p`
  font-style: italic;
`
const index = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const pubDate = new Date(frontmatter.pub_date).toLocaleDateString()
  const updateDate = new Date(frontmatter.update_date).toLocaleDateString()
  return (
    <Layout>
      <Container>
        <Title>{frontmatter.title}</Title>
        <Body dangerouslySetInnerHTML={{ __html: html }} />
        <StyledDate>
          {frontmatter.uDatedate_date
            ? `Updated: ${updateDate}`
            : `Published: ${pubDate}`}
        </StyledDate>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        pub_date
        update_date
        title
      }
    }
  }
`

export default index
