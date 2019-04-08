import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '@ui/theme'

export const Checkbox = ({ checked, disabled }) => (
  <svg width={20} height={20} fill="none">
    {checked ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2 10l3.5 3.5 8.833-8.833L17.5 5.833l-10 10-4.667-4.666L4 10z"
        fill={disabled ? theme.pallete.whiteSmoke : theme.pallete.radicalRed}
      />
    ) : (
      <rect x={0.5} y={0.5} width={19} height={19} rx={1.5} stroke="#D3D3D3" />
    )}
  </svg>
)

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
}
