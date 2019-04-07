import React from 'react'
import PropTypes from 'prop-types'
import { styled, keyframes } from '@ui/theme'
import { IconLoader } from '@ui/atoms'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  width: 18px;
  height: 18px;
  animation: ${rotate} 1s linear infinite;
`

export const Loader = ({ loading, color }) => {
  return <Container>{loading ? <IconLoader color={color} /> : null}</Container>
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
}
