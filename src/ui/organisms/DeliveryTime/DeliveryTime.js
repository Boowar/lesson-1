import React from 'react'
import PropTypes from 'prop-types'

import { FormLabel, TextField } from '@ui/molecules'
import { HBox, VBox } from '@ui/atoms'
import { styled } from '@ui/theme'

const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
`
const TimeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const DeliveryTime = ({ label, from, to, disabled }) => {
  return (
    <Container>
      <FormLabel children={label} />
      <HBox half />
      <TimeContainer>
        <TextField disabled={disabled} startAdornment="с" value={from} />
        {'—'}
        <TextField disabled={disabled} startAdornment="до" value={to} />
      </TimeContainer>
    </Container>
  )
}

DeliveryTime.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
}
