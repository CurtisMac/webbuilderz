import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

//Assets

//Styles
const Card = styled.div`
  margin: 10px;
  width: 280px;
  height: 320px;
  box-shadow: ${props => props.theme.shadow.box};
  :hover {
    transform: scale(1.007);
  }
  :active {
    transform: scale(1);
    box-shadow: ${props => props.theme.shadow.boxActive};
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.pri2};
`
const ImageWrapper = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
`
const Info = styled.div`
  padding: 15px 20px;
  position: relative;
  height: 60%;
  box-sizing: border-box;
`
const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.55rem;
  margin: 0;
  max-height: calc(1.52rem * 3);
  overflow: hidden;
`
const Divider = styled.div`
  position: absolute;
  bottom: 76px;
  width: 240px;
`
const Line = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.pri1};
  position: absolute;
  bottom: 9px;
  width: 240px;
`
const Diamond = styled.div`
  display: grid;
  grid-template: repeat(2, 10px) / repeat(2, 10px);
  justify-content: center;
  transform: rotate(45deg);
`
const Box = styled.div`
  border: 1px solid ${props => props.theme.colors.pri1};
  height: 9px;
  width: 9px;
  background-color: white;
`
const Cat = styled.p`
  text-decoration: none;
  font-size: 0.8rem;
  background-color: ${props => props.theme.colors.pri3};
  color: white;
  padding: 3px 5px;
  display: inline;
  /* border-radius: 5px; */
  position: absolute;
  bottom: 40px;
`
const Author = styled.p`
  font-size: 1rem;
  position: absolute;
  bottom: 12.5px;
  /* font-weight: 700; */
`
const DateString = styled.p`
  font-size: 0.7rem;
  margin: 10px 0;
  position: absolute;
  bottom: 0;
  font-style: italic;
`
//Main Component
const index = props => {
  console.log(props.data)
  const { author, alt, cats, pub_date, title, update_date, image } = props.data
  const category = cats.otherCat ? cats.otherCat : cats.category
  console.log(pub_date)
  const dateFormat = { month: "short", year: "numeric", day: "numeric" }
  const pubDate = new Date(pub_date).toLocaleDateString("en-GB", dateFormat)
  const upDate = new Date(update_date).toLocaleDateString("en-GB", dateFormat)
  const date = update_date ? `Updated: ${upDate}` : `${pubDate}`
  return (
    <StyledLink to={props.slug} title={title}>
      <Card>
        <ImageWrapper>
          <Img fixed={image.childImageSharp.fixed} alt={alt}></Img>
        </ImageWrapper>
        <Info>
          <Title>{title}</Title>
          <Divider>
            <Line></Line>
            <Diamond>
              <Box />
              <Box />
              <Box />
              <Box />
            </Diamond>
          </Divider>
          <Cat>{category}</Cat>
          <Author>{author}</Author>
          <DateString>{date}</DateString>
        </Info>
      </Card>
    </StyledLink>
  )
}

export default index
