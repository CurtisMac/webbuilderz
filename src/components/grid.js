// import React from "react"
import styled, { css } from "styled-components"

//Vars & Mixins
const oneTwelfth = 100 / 12
const xlargeQuery = css`
  @media (max-width: ${props => props.theme.screen.xlarge}) {
    width: ${props => props.col_xl * oneTwelfth}%;
  }
`
const largeQuery = css`
  @media (max-width: ${props => props.theme.screen.large}) {
    width: ${props => props.col_lg * oneTwelfth}%;
  }
`
const mediumQuery = css`
  @media (max-width: ${props => props.theme.screen.medium}) {
    width: ${props => props.col_md * oneTwelfth}%;
  }
`
const smallQuery = css`
  @media (max-width: ${props => props.theme.screen.small}) {
    width: ${props => props.col_sm * oneTwelfth}%;
  }
`
const xSmallQuery = css`
  @media (max-width: ${props => props.theme.screen.xsmall}) {
    width: ${props => props.col_xs * oneTwelfth}%;
  }
`

//Components
export const Container = styled.div`
  max-width: 1224px;
  margin: 0 auto;
  padding: 0 10%;
  @media (max-width: ${props => props.theme.screen.medium}) {
    padding: 0 6%;
  }
`
export const Row = styled.div`
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "row wrap")};
  margin: ${props => (props.margin ? props.margin : `25px 0`)};
`
export const Column = styled.div`
  flex: 1 1 auto;
  order: ${props => (props.order ? props.order : 0)};
  align-self: ${props => (props.align ? props.align : "auto")};
  width: ${props => props.col * oneTwelfth}%;
  box-sizing: border-box;
  padding:${props => (props.padding ? props.padding : `10px`)};
  ${props => props.col_xl && xlargeQuery}
  ${props => props.col_lg && largeQuery}
  ${props => props.col_md && mediumQuery}
  ${props => props.col_sm && smallQuery}
  ${props => props.col_xs && xSmallQuery}
`
