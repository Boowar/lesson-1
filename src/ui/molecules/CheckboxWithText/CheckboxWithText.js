import React from 'react'
import PropTypes from 'prop-types'

import { VBox, Checkbox } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'

const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: row;
`

export const CheckboxWithText = ({ checked, disabled, text }) => {
  return (
    <Container>
      <Checkbox disabled={disabled} checked={checked} />
      <VBox />
      <Body2 children={text} />
    </Container>
  )
}

CheckboxWithText.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  text: PropTypes.string,
}
