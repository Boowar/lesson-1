import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox, IconSuccess } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment, Loader } from '@ui/molecules'
import { styled, theme } from '@ui/theme'

const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
`

const FieldContainer = styled.div`
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.paddings.main};
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  height: 40px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 44px;
  }
`

export const TextField = ({
  startAdornment,
  status,
  disabled,
  placeholder,
  label,
  error,
  value,
  tip,
  valid,
  onChange,
  onBlur,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = e => {
    if (onFocus) {
      onFocus(e)
    }
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) {
      onBlur(e)
    }
    setFocused(false)
  }
  return (
    <Container>
      <FormLabel valid={valid}>{label}</FormLabel>
      <HBox height={theme.paddings.half} />
      <FieldContainer focused={focused} error={error}>
        {startAdornment ? (
          <FormAdornment>{startAdornment}</FormAdornment>
        ) : (
          <VBox />
        )}
        <StyledInput
          placeholder={placeholder ? placeholder : ''}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <FormAdornment>
          {status === 'loading' ? <Loader loading="true" /> : null}
          {status === 'success' ? <IconSuccess /> : null}
        </FormAdornment>
      </FieldContainer>
      <HBox height={theme.paddings.half} />
      {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
    </Container>
  )
}

TextField.propTypes = {
  status: PropTypes.oneOf(['loading', 'success']),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
  valid: PropTypes.bool,
  startAdornment: PropTypes.node,

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
