import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import shortid from "shortid"

//Components
import { Row, Column } from "../grid"
import { SectionSpacing, Title, SubTitle, Text } from "./styles"
// import Button from "../styledButton"

//Styles
const Container = styled.div`
  margin: ${SectionSpacing} 0;
`
const ImgColumn = styled(Column)`
  order: 1;
  @media (max-width: ${props => props.theme.screen.large}) {
    order: 3;
  }
`
const ImgParent = styled.div`
  width: 100%;
  margin: 10px;
  position: relative;
`
const Ratio = styled.div`
  width: 100%;
  padding-bottom: 100%;
`
const CenterImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainImg = styled(Img)`
  width: 45%;
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 14.7%;
  box-sizing: border-box;
  :nth-child(3) {
    /* SEM */
    transform: rotate(45deg);
    .iconParent {
      transform: rotate(45deg) translate(-5%, 6%);
      transform-origin: top center;
      .iconUnit {
        transform: rotate(-90deg);
        flex-flow: column-reverse nowrap;
      }
      .iconLine {
        transform: translate(5px, 15px);
      }
    }
  }
  :nth-child(4) {
    /* Social Media */
    transform: rotate(105deg);
    .iconParent {
      transform: rotate(35deg);
      .iconUnit {
        transform: rotate(-140deg) translate(10px, 10px);
        flex-flow: column-reverse nowrap;
      }
      .iconLine {
        transform: translate(15px, 20px);
      }
    }
  }
  :nth-child(5) {
    /* PPC */
    transform: rotate(165deg);
    .iconParent {
      transform: rotate(45deg) translate(-10px, 25px);
      .iconUnit {
        transform: rotate(-210deg);
      }
      .iconLine {
        transform: translate(5px, 10px);
      }
    }
  }
  :nth-child(6) {
    /* Landing Pages */
    transform: rotate(225deg);
    .iconLine {
      transform: translate(0, 23px);
    }
    .iconParent {
      transform: rotate(45deg);
      .iconUnit {
        transform: rotate(-270deg) translate(0, 25px);
      }
    }
  }
  :nth-child(7) {
    /* SEO */
    transform: rotate(285deg);
    .iconParent {
      transform: rotate(45deg);
      .iconUnit {
        transform: rotate(-330deg) translate(-10px);
      }
      .iconLine {
        /* transform: translate(5px, 10px); */
      }
    }
  }
  :nth-child(8) {
    /* Content Marketing */
    transform: rotate(345deg);
    .iconParent {
      transform: rotate(-345deg);
      .iconUnit {
        flex-flow: column-reverse nowrap;
        transform: translate(-23px, -10px);
      }
      .iconLine {
        transform: rotate(30deg) translate(15px, 30px);
      }
    }
  }
`
const Icon = styled.div`
  width: 40%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
`
const IconImg = styled.div`
  width: 25%;
  display: flex;
  flex-flow: column nowrap;
`
const IconText = styled.p`
  text-align: center;
  margin: 10px -100%;
`
const IconLine = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors[props.color]};
  width: 50%;
  margin: 12% 15% 0;
`
//Main Component
const index = props => {
  const cnt = props.content
  const icons = cnt.cards.map((e, i) => {
    return (
      <IconWrapper key={shortid.generate()}>
        <Icon className="iconParent">
          <IconImg className="iconUnit">
            <Img
              fluid={e.image.childImageSharp.fluid}
              alt="Digital marketing image"
            />
            <IconText>{e.title}</IconText>
          </IconImg>
          <IconLine className="iconLine" color={e.color} />
        </Icon>
      </IconWrapper>
    )
  })
  return (
    <Container>
      <Row>
        <ImgColumn col={6} col_lg={12} padding="10px 45px">
          <ImgParent>
            <Ratio />
            <CenterImg>
              <MainImg
                fluid={cnt.image.childImageSharp.fluid}
                alt="Digital marketing image"
              />
            </CenterImg>
            {icons}
          </ImgParent>
        </ImgColumn>
        <Column
          col={6}
          col_lg={12}
          order={2}
          align="center"
          padding="10px 15px"
        >
          <Title color="pri1">{cnt.title}</Title>
          <SubTitle>{cnt.subTitle}</SubTitle>
          <Text>{cnt.text}</Text>
        </Column>
      </Row>
    </Container>
  )
}

export default index
