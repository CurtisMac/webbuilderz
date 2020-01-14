import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import { Container } from "../components/grid"

//Styles
const Breadcrumbs = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 5px;
  .breadcrumb {
    color: ${props => props.theme.colors.pri2};
    font-size: 1.1rem;
    @media (max-width: ${props => props.theme.screen.medium}) {
      font-size: 1rem;
    }
  }
`
const BCLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.pri1};
  }
`
const Title = styled.h1`
  text-align: left;
  font-size: 3em;
  margin: 10px 0;
  color: ${props => props.theme.colors.pri2};
  @media (max-width: ${props => props.theme.screen.medium}) {
    font-size: 2.2em;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: 1.6em;
  }
`
const Author = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0 0 10px;
  @media (max-width: ${props => props.theme.screen.medium}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: 1rem;
  }
`
const StyledDate = styled.p`
  font-style: italic;
  margin: 5px 0;
  &.mobile {
    font-size: 0.9rem;
    @media (min-width: ${props => props.theme.screen.medium}) {
      display: none;
    }
  }
  &.large {
    @media (max-width: ${props => props.theme.screen.medium}) {
      display: none;
    }
  }
`
const Body = styled.div`
  margin-bottom: 75px;
  min-height: 100vh;
  blockquote {
    color: red;
  }
`
const index = ({ data }) => {
  const { html } = data.blog
  const url = `https://webbuilderz.io${data.blog.fields.slug}`
  const {
    author,
    seo,
    cats,
    pub_date,
    title,
    update_date,
    image,
    alt,
  } = data.blog.frontmatter
  const dateFormat = { month: "short", year: "numeric", day: "numeric" }
  const pubDate = new Date(pub_date).toLocaleDateString("en-GB", dateFormat)
  const updateDate = new Date(update_date).toLocaleDateString(
    "en-GB",
    dateFormat
  )
  const tags = [...cats.tagList, cats.category].join(", ")
  const schema = {
    "@context": "http://schema.org",
    "@type": "Article",
    author: author,
    dateCreated: pub_date,
    datePublished: pub_date,
    description: seo.metaDesc,
    headline: title,
    inLanguage: "en",
    image: image.publicURL,
    keywords: tags,
    publisher: {
      "@type": "Organization",
      name: "WebBuilderz",
      logo: {
        "@type": "ImageObject",
        url: data.logo.publicURL,
        height: data.logo.childImageSharp.original.height,
        width: data.logo.childImageSharp.original.width,
      },
    },
    url: data.blog.fields.slug,
  }
  if (update_date) {
    schema.dateModified = update_date
  }
  return (
    <Layout>
      <Helmet>
        <html lang="en" prefix="og: http://ogp.me/ns/article#"></html>
        <title>{title}</title>
        <meta name="description" content={seo.metaDesc}></meta>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={pub_date} />
        {update_date &&
          `<meta property="article:modified_time" content=${update_date} />`}
        <meta property="article:author" content={author} />
        <meta property="article:tag" content={tags} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image.publicURL} />
        <meta
          property="og:image.width"
          content={data.logo.childImageSharp.original.width}
        />
        <meta
          property="og:image.height"
          content={data.logo.childImageSharp.original.height}
        />
        <meta property="og:image.alt" content={alt} />
        <meta property="og:description" content={seo.metaDesc} />
        <meta property="og:locale " content="en_GB" />
        <meta property="og:site_name " content="WebBuilderz" />
        <meta property="fb:admins" content="WebBuilderz-103275251198188" />
      </Helmet>
      <Container>
        <Breadcrumbs>
          <nav>
            <BCLink className="breadcrumb" to={"/"}>
              BLOG
            </BCLink>
            <span className="breadcrumb"> / </span>
            <BCLink className="breadcrumb" to={"/"}>
              {cats.otherCat
                ? cats.otherCat.toUpperCase()
                : cats.category.toUpperCase()}
            </BCLink>
          </nav>
          <StyledDate className="large">
            {update_date ? `Updated: ${updateDate}` : `${pubDate}`}
          </StyledDate>
        </Breadcrumbs>
        <StyledDate className="mobile">
          {update_date ? `Updated: ${updateDate}` : `${pubDate}`}
        </StyledDate>
        <main>
          <article>
            <Title>{title.toUpperCase()}</Title>
            <Author>By {author}</Author>
            {image ? (
              <Img fluid={image.childImageSharp.fluid} alt={alt}></Img>
            ) : null}
            <Body dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </main>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    blog: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        author
        pub_date
        title
        update_date
        seo {
          metaDesc
        }
        cats {
          category
          tagList
          otherCat
        }
        alt
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      publicURL
      childImageSharp {
        original {
          height
          width
        }
      }
    }
  }
`

export default index
