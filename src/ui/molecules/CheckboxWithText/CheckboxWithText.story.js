import React from 'react'
import { storiesOf } from '@storybook/react'
import { CheckboxWithText } from './CheckboxWithText'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module).add('CheckboxWithText', () => (
  <CheckboxWithText
    disabled={boolean('disabled', false)}
    checked={boolean('checked', false)}
    text={text('text', 'Со всеми условиями согласен')}
  />
))
