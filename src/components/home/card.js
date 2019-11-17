import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

//Assets

//Styles
const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${props => props.width || "250px"};
  height: ${props => props.height || "250px"};
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadow.box};
  margin: 15px;
  padding: 20px;
`
const Icon = styled.div`
  width: 30px;
  margin: 0 auto;
`
const Title = styled.h3`
  text-transform: uppercase;
  color: ${props => props.theme.colors[props.color]};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 15px 0 10px 0;
`
const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
`

//Main Component
const index = ({ className, large, ...props }) => {
  return (
    <Card className={className} {...props}>
      <Icon>
        <Img
          fluid={props.data.image.childImageSharp.fluid}
          alt={`${props.data.title} icon`}
        ></Img>
      </Icon>
      <Title color={props.data.color}>{props.data.title}</Title>
      <Text>{props.data.text}</Text>
    </Card>
  )
}

export default index
