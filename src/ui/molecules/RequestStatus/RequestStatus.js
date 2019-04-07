import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'

const Container = styled.div`
  text-align: center;
  color: ${({ status }) =>
    status === 'loading'
      ? theme.pallete.lightGray
      : status === 'success'
      ? theme.pallete.successColor
      : theme.pallete.errorColor};
`

export const RequestStatus = ({ text, success, error }) => {
  return !success && !error ? (
    <Container status="loading">{text}</Container>
  ) : error ? (
    <Container status="error">{text}</Container>
  ) : (
    <Container status="success">{text}</Container>
  )
}

RequestStatus.propTypes = {
  sucess: PropTypes.bool,
  error: PropTypes.bool,
  text: PropTypes.string,
}