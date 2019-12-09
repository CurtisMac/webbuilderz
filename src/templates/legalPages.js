import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container } from "../components/grid"

//Styles
const Body = styled.div``
const Title = styled.h1`
  text-align: center;
`

const index = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <Container>
        <Title>{frontmatter.title}</Title>
        <Body dangerouslySetInnerHTML={{ __html: html }} />
        <p>{frontmatter.pub_date}</p>
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
        title
      }
    }
  }
`

export default index
