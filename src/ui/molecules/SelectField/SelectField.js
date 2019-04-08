import React from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox, IconRectangleDown } from '@ui/atoms'
import { FormLabel, FormAdornment } from '@ui/molecules'
import { styled } from '@ui/theme'

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

const StyledSelection = styled.div`
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
  display: flex;
  align-items: center;
`

export const SelectField = ({ label, value, onClick }) => {
  const handleClick = e => {}

  return (
    <Container>
      <FormLabel>{label}</FormLabel>
      <HBox half />
      <FieldContainer onClick={handleClick}>
        <VBox />
        <StyledSelection>{value}</StyledSelection>
        <FormAdornment>
          <IconRectangleDown />
        </FormAdornment>
      </FieldContainer>
      <HBox half />
    </Container>
  )
}

SelectField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,

  onClick: PropTypes.func,
}
