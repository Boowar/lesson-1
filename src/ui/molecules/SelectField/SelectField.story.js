import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField } from './SelectField'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const actions = {
  onClick: action('onClick'),
}

storiesOf('ui/molecules', module).add('SelectField', () => (
  <SelectField
    {...actions}
    label={text('label', 'Страна')}
    value={select(
      'value',
      { England: 'Англия', Russia: 'Россия', none: null },
      null,
    )}
  />
))
