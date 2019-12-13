import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"

//Components
import { Container } from "../components/grid"

//Styles
const TopSection = styled.div`
  position: relative;
  margin: 35px 0 100px;
`
const Title = styled.h1`
  text-align: right;
  margin-right: 150px;
  text-transform: uppercase;
  font-size: 2.8rem;
  color: ${props => props.theme.colors.pri2};
  @media (max-width: ${props => props.theme.screen.large}) {
    margin-right: 0;
    text-align: center;
    margin-bottom: 40px;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: 2.2rem;
  }
`
const SubTitle = styled(Title)`
  text-align: left;
`
const AboutTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AboutText = styled.p`
  background-color: ${props => props.theme.colors.pri3};
  color: white;
  padding: 50px;
  margin: 10%;
  border-radius: 10px;
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 500;
  max-width: 750px;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.medium}) {
    padding: 40px;
    font-size: 1.5rem;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    margin: 10% 0;
    font-size: 1.4rem;
    padding: 30px;
  }
`
const Shape1 = styled.div`
  background-color: ${props => props.theme.colors.pri2};
  height: 350px;
  width: 350px;
  position: absolute;
  top: 100px;
  left: 20px;
  transform: rotate(-15deg);
  z-index: -1;
  @media (max-width: ${props => props.theme.screen.small}) {
    left: 0;
  }
  @media (max-width: 420px) {
    left: -20px;
  }
`
const DotsImg = styled(Img)`
  transform: rotate(15deg);
`
const Shape2 = styled.div`
  position: absolute;
  bottom: -10px;
  right: 20px;
  z-index: -1;
  @media (max-width: 550px) {
    right: -20px;
    bottom: -20px;
  }
  @media (max-width: ${props => props.theme.screen.small}) {
    right: -40px;
    bottom: -20px;
  }
`
const TeamSection = styled.div`
  /* display: flex;
  flex-flow: row wrap;
  justify-content: center; */
`
const TeamCard = styled.div`
  /* box-shadow: ${props => props.theme.shadow.box};
  border-radius: 10px; */
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-flow: row;
  :nth-child(2){
    flex-flow: row-reverse;
    .teamInfo {
      margin-left: 0;
    }
  }
`
const TeamImg = styled.div`
  width: 250px;
`
const TeamInfo = styled.div`
  margin-left: 30px;
  flex: 1 1;
`
const TeamName = styled.h2`
  color: black;
  margin-top: 0;
`
const TeamRole = styled.h3`
  /* width: 200px; */
`
const TeamBio = styled.div`
  /* width: 200px; */
`

export default ({ data }) => {
  console.log(data)
  const team = data.netlify.nodes[0].team.map((e, i) => {
    return (
      <TeamCard key={i}>
        <TeamImg>
          <Img fluid={e.photo.childImageSharp.fluid} alt="" />
        </TeamImg>
        <TeamInfo className="teamInfo">
          <TeamName key={i}>{e.name}</TeamName>
          <TeamRole>{e.role}</TeamRole>
          <TeamBio>{e.bio}</TeamBio>
        </TeamInfo>
      </TeamCard>
    )
  })
  return (
    <Layout
      title={data.netlify.nodes[0].metadata.metaTitle}
      description={data.netlify.nodes[0].metadata.metaDesc}
    >
      <Container>
        <TopSection>
          <Title>{data.netlify.nodes[0].aboutTitle}</Title>
          <Shape1>
            <DotsImg fixed={data.dots.childImageSharp.fixed} alt="" />
          </Shape1>
          <AboutTextWrapper>
            <AboutText>{data.netlify.nodes[0].aboutIntro}</AboutText>
          </AboutTextWrapper>
          <Shape2>
            <Img fixed={data.circle.childImageSharp.fixed} alt="" />
          </Shape2>
        </TopSection>
        <SubTitle>OUR TEAM</SubTitle>
        <TeamSection>{team}</TeamSection>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    netlify: allAboutYaml {
      nodes {
        aboutIntro
        aboutTitle
        metadata {
          metaDesc
          metaTitle
        }
        team {
          role
          name
          bio
          photo {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    dots: file(relativePath: { eq: "rectangle.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    circle: file(relativePath: { eq: "circle.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
