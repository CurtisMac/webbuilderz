import React from "react"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import styled, { keyframes } from "styled-components"

//Components
import Layout from "../components/layout"
import Button from "../components/styledButton"
import mblGrad from "../data/img/white_background_mobile.svg"
import lrgGrad from "../data/img/white_background_large.svg"

//Styles
const Container = styled.div`
  background-image: ${props => props.theme.gradients.colour};
  min-height: calc(100vh - ${props => props.theme.size.navHeader});
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    min-height: calc(100vh - ${props => props.theme.size.navHeader});
  }
`
const GradientWrapper = styled.div`
  width: 100%;
  border-top: 1px solid white;
`
const MobileGradient = styled.img`
  display: none;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    display: block;
    width: 100%;
    margin-top: -2px;
  }
`
const TopGradient = styled.img`
  display: block;
  width: 100%;
  margin-top: -20px;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    display: none;
  }
`
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${props => props.theme.colors.pri1};
`
const FormContainer = styled(Form)`
  display: flex;
  flex-flow: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    padding: 0 30px;
  }
`
const InlineGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    flex-flow: column;
  }
`
const InputGroup = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 70px;
  margin: 0 10px;
  width: 100%;
  @media screen and (max-width: ${props => props.theme.screen.medium}) {
    width: auto;
  }
`
const MsgGroup = styled.div`
  min-height: 50px;
  margin: 0 10px;
`
const StyledField = styled(Field)`
  border-radius: 25px;
  padding: 5px 10px;
  ${props =>
    props.err
      ? `border: 2px solid ${props.theme.colors.error};`
      : `border: 3px solid ${props.theme.colors.pri1};`}
`
const MsgField = styled(StyledField)`
  min-height: 100px;
  width: 100%;
  box-sizing: border-box;
`
const StyledErrMsg = styled(ErrorMessage)`
  margin: 4px 0 0 10px;
  color: white;
`
const StyledButton = styled(Button)`
  padding: 10px;
  margin: 20px auto;
  width: 180px;
`
const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 15px;
  height: 15px;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const LoaderRing = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.theme.colors.pri3};
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => props.theme.colors.pri3} transparent transparent
    transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`
const index = () => (
  <Layout>
    <Container>
      <GradientWrapper>
        <TopGradient src={lrgGrad} alt="" />
        <MobileGradient src={mblGrad} alt="" />
      </GradientWrapper>
      <Title>Contact</Title>
      <Formik
        initialValues={{
          email: "",
          emailConfirm: "",
          firstName: "",
          lastName: "",
          message: "",
        }}
        validate={values => {
          let errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          if (!values.firstName) {
            errors.firstName = "Required"
          }
          if (!values.lastName) {
            errors.lastName = "Required"
          }
          if (values.email !== values.emailConfirm) {
            errors.emailConfirm = "Email addresses don't match"
          }
          if (!values.message) {
            errors.message = "Please include message"
          }
          return errors
        }}
        onSubmit={(values, { resetForm, setStatus }) => {
          axios
            .post(
              "https://us-central1-webbuilderz.cloudfunctions.net/contact",
              values
            )
            .then(resp => {
              resetForm()
              setStatus({ msg: resp.data.message })
            })
            .catch(e => {
              resetForm()
              setStatus({
                msg: "Sorry, we've encountered an error! Please try again.",
              })
            })
        }}
        render={props => (
          <FormContainer onSubmit={props.handleSubmit}>
            <InlineGroup>
              <InputGroup>
                <StyledField
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  err={
                    props.errors.firstName && props.touched.firstName ? 1 : 0
                  }
                />
                <StyledErrMsg name="firstName" component="div" />
              </InputGroup>
              <InputGroup>
                <StyledField
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  err={props.errors.lastName && props.touched.lastName ? 1 : 0}
                />
                <StyledErrMsg name="lastName" component="div" />
              </InputGroup>
            </InlineGroup>
            <InlineGroup>
              <InputGroup>
                <StyledField
                  type="text"
                  name="email"
                  placeholder="Email"
                  err={props.errors.email && props.touched.email ? 1 : 0}
                />
                <StyledErrMsg name="email" component="div" />
              </InputGroup>
              <InputGroup>
                <StyledField
                  type="text"
                  name="emailConfirm"
                  placeholder="Confirm Email"
                  err={
                    props.errors.emailConfirm && props.touched.emailConfirm
                      ? 1
                      : 0
                  }
                />
                <StyledErrMsg name="emailConfirm" component="div" />
              </InputGroup>
            </InlineGroup>
            <MsgGroup>
              <MsgField
                type="text"
                name="message"
                component="textarea"
                placeholder="Message:"
                err={props.errors.message && props.touched.message ? 1 : 0}
              />
              <StyledErrMsg name="message" component="div" />
            </MsgGroup>
            <StyledButton
              forwardedAs="button"
              type="submit"
              disabled={props.isSubmitting}
              primary
            >
              {props.isSubmitting ? (
                <Loader>
                  <LoaderRing></LoaderRing>
                  <LoaderRing></LoaderRing>
                  <LoaderRing></LoaderRing>
                  <LoaderRing></LoaderRing>
                </Loader>
              ) : (
                "Submit"
              )}
            </StyledButton>
            {props.status ? <p>{props.status.msg}</p> : ""}
            {/* <p>{props.status ? props.status.msg : "Nothing"}</p> */}
          </FormContainer>
        )}
      />
    </Container>
  </Layout>
)

export default index
